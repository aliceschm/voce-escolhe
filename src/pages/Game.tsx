import { useChooseOption } from "../hooks/useChooseOption";
import { InitialCard } from "../components/InitialCard";
import { ParticipantCard } from "../components/ParticipantCard";
import { ResultCard } from "../components/ResultCard";
import { useTranslation } from "react-i18next";

export function Game() {
  const {
    numPlayers,
    setNumPlayers,
    gameStarted,
    startGame,
    participants,
    currentPlayer,
    updateParticipantName,
    updateParticipantOption,
    saveParticipant,
    allSaved,
    result,
  } = useChooseOption();

  //i18n translations
  const { t } = useTranslation();

  //ParticipantCard
  const optionLabel = (index: number) =>
    t("pCard.fields.optionLabel", { number: index + 1 });
  const optionPlaceholder = (index: number) =>
    t("pCard.fields.optionPlaceholder", { number: index + 1 });

  //ResultCard
  const phrases = t("rCard.fields.text", { returnObjects: true }) as string[];
  const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
  const option =
    result?.type === "match" ? result.data[0]?.option : result?.data;

  if (!gameStarted) {
    return (
      <InitialCard
        text={t("iCard.fields.text")}
        numPlayers={numPlayers}
        setNumPlayers={setNumPlayers}
        onStart={startGame}
        buttonLabel={t("iCard.fields.button")}
      />
    );
  }

  if (!allSaved) {
    const participant = participants[currentPlayer];
    return (
      <div>
        <ParticipantCard
          text={t("pCard.fields.text") || "Fill participant data"}
          name={participant.name}
          options={participant.options}
          onChangeName={(v) => updateParticipantName(currentPlayer, v)}
          onChangeOption={(i, v) =>
            updateParticipantOption(currentPlayer, i, v)
          }
          onSubmit={() => saveParticipant(currentPlayer)}
          nameLabel={t("pCard.fields.nameLabel")}
          namePlaceholder={t("pCard.fields.namePlaceholder")}
          optionLabel={optionLabel}
          optionPlaceholder={optionPlaceholder}
        />
      </div>
    );
  }

  return (
    <div>
      <ResultCard
        title={t("rCard.fields.title") || "Match Results"}
        text={randomPhrase}
        result={option}
      />
      <h2>{t("result.title") || "Match Results"}</h2>
      {result?.type === "match" ? (
        <ul>
          {result.data.map(({ option, votes, weight }: any) => (
            <li key={option}>
              {option} — Votes: {votes}, Weight: {weight}
            </li>
          ))}
        </ul>
      ) : (
        <p>{result?.data || "No matches found"}</p>
      )}
    </div>
  );
}
