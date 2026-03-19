import { useChooseOption } from "../hooks/useChooseOption";
import { InitialCard } from "../components/InitialCard";
import { ParticipantCard } from "../components/ParticipantCard";
import { ResultCard } from "../components/ResultCard";
import { useTranslation } from "react-i18next";
import i18n from "../utils/i18n";

export function Game() {
  // i18n translations
  const { t } = useTranslation();

  // ResultCard phrases (array)
  const phrases = t("rCard.fields.text", { returnObjects: true }) as string[];

  const {
    numPlayers,
    setNumPlayers,
    gameStarted,
    startGame,
    resetGame,
    participants,
    currentPlayer,
    updateParticipantName,
    updateParticipantOption,
    saveParticipant,
    allSaved,
    result,
  } = useChooseOption(phrases);

  // ParticipantCard
  const optionLabel = (index: number) =>
    t("pCard.fields.optionLabel", { number: index + 1 });

  const optionPlaceholder = (index: number) =>
    t("pCard.fields.optionPlaceholder", { number: index + 1 });

  // Extract result option
  const option =
    result?.type === "match" // result from strongMatches - if "match" it will receive an array, if "random" it will receive a string
      ? (result.data[0]?.option ?? "—") // fallback if undefined
      : (result?.data ?? "—"); // fallback if null or undefined

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
      <div key={`participant-${currentPlayer}`}>
        <ParticipantCard
          text={t("pCard.fields.text") || "Fill participant data"}
          name={participant.name}
          options={participant.options}
          onChangeName={(v) => updateParticipantName(currentPlayer, v)}
          onChangeOption={(i, v) =>
            updateParticipantOption(currentPlayer, i, v)
          }
          buttonLabel={t("pCard.fields.button")}
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
        text={result?.phrase ?? ""} // phrase now comes from hook (stable)
        result={option}
        buttonLabel={t("rCard.fields.button")}
        onRestart={resetGame}
      />
    </div>
  );
}
