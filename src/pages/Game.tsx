import { useState } from "react";
import { useChooseOption } from "../hooks/useChooseOption";
import { InitialCard } from "../components/InitialCard";
import { IntroCard } from "../components/IntroCard";
import { ParticipantCard } from "../components/ParticipantCard";
import { ResultCard } from "../components/ResultCard";
import { useTranslation } from "react-i18next";
import { Hero } from "../components/Hero";
import "../utils/i18n";

export function Game() {
  const { t } = useTranslation();
  const [showIntro, setShowIntro] = useState(false);
  const [showSetup, setShowSetup] = useState(false);

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

  const optionLabel = (index: number) =>
    t("pCard.fields.optionLabel", { number: index + 1 });

  const optionPlaceholder = (index: number) =>
    t("pCard.fields.optionPlaceholder", { number: index + 1 });

  const option =
    result?.type === "match"
      ? (result.data[0]?.option ?? "—")
      : (result?.data ?? "—");

  if (!gameStarted && !showIntro && !showSetup) {
    return (
      <Hero
        title={t("hero.fields.title")}
        subtitle={t("hero.fields.subtitle")}
        startLabel={t("hero.fields.startButton")}
        instructionsLabel={t("hero.fields.instructionsButton")}
        onStart={() => setShowSetup(true)}
        onInstructions={() => setShowIntro(true)}
      />
    );
  }

  if (!gameStarted && showIntro && !showSetup) {
    return (
      <IntroCard
        text={t("iCard.fields.text")}
        steps={t("iCard.fields.steps", { returnObjects: true }) as string[]}
        buttonLabel={t("iCard.fields.button")}
        onStart={() => {
          setShowIntro(false);
          setShowSetup(true);
        }}
      />
    );
  }

  if (!gameStarted && showSetup) {
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
        text={result?.phrase ?? ""}
        result={option}
        buttonLabel={t("rCard.fields.button")}
        onRestart={resetGame}
      />
    </div>
  );
}
