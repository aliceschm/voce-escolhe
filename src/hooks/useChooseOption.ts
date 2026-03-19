import { useState } from "react";
import { normalizeOption } from "../utils/normalize";

type Participant = {
  name: string;
  options: string[];
  saved: boolean;
};

type MatchData = {
  votes: number;
  weight: number;
};

type MatchResult = {
  type: "match";
  phrase: string;
  data: { option: string; votes: number; weight: number }[];
};

type RandomResult = {
  type: "random";
  phrase: string;
  data: string | null;
};

type Result = MatchResult | RandomResult | null;

export function useChooseOption(resultPhrases: string[]) {
  const [numPlayers, setNumPlayers] = useState(2);
  const [gameStarted, setGameStarted] = useState(false);
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [result, setResult] = useState<Result>(null);

  function startGame() {
    // Initialize participants with empty data
    setParticipants(
      Array(numPlayers)
        .fill(null)
        .map(() => ({
          name: "",
          options: ["", "", "", "", ""],
          saved: false,
        })),
    );

    setGameStarted(true);
    setCurrentPlayer(0);
    setResult(null);
  }

  function updateParticipantName(index: number, name: string) {
    setParticipants((old) => {
      const copy = [...old];
      copy[index] = { ...copy[index], name };
      return copy;
    });
  }

  function updateParticipantOption(
    index: number,
    optionIndex: number,
    value: string,
  ) {
    setParticipants((old) => {
      const copy = [...old];
      const optionsCopy = [...copy[index].options];
      optionsCopy[optionIndex] = value;
      copy[index] = { ...copy[index], options: optionsCopy };
      return copy;
    });
  }

  function saveParticipant(index: number) {
    // Mark participant as saved
    setParticipants((old) => {
      const copy = [...old];
      copy[index] = { ...copy[index], saved: true };
      return copy;
    });

    // Move to next participant or calculate result
    if (index + 1 < numPlayers) {
      setCurrentPlayer(index + 1);
    } else {
      calculateMatches();
    }
  }

  const allSaved =
    participants.length > 0 && participants.every((p) => p.saved);

  function calculateMatches() {
    const MATCH_DATA: Record<string, MatchData> = {};

    // Pick a random phrase ONCE (not during render)
    const phrase =
      resultPhrases[Math.floor(Math.random() * resultPhrases.length)] ?? "";

    participants.forEach((participantI, i) => {
      // Normalize and remove empty options
      const listI = participantI.options
        .map(normalizeOption)
        .filter((opt) => opt !== "");

      listI.forEach((option, idx) => {
        participants.forEach((participantJ, j) => {
          if (j === i) return;

          const listJ = participantJ.options
            .map(normalizeOption)
            .filter((opt) => opt !== "");

          // Compare normalized values
          if (listJ.includes(option)) {
            if (!MATCH_DATA[option]) {
              MATCH_DATA[option] = { votes: 0, weight: 0 };
            }

            MATCH_DATA[option].votes += 1;
            MATCH_DATA[option].weight += idx;
          }
        });
      });
    });

    const strongMatches = Object.entries(MATCH_DATA)
      .filter(([_, data]) => data.votes >= 1)
      .sort((a, b) => {
        // Sort by votes (desc), then weight (asc)
        if (b[1].votes !== a[1].votes) {
          return b[1].votes - a[1].votes;
        }
        return a[1].weight - b[1].weight;
      })
      .map(([option, data]) => ({
        option,
        votes: data.votes,
        weight: data.weight,
      }));

    if (strongMatches.length > 0) {
      setResult({ type: "match", phrase, data: strongMatches });
    } else {
      // Fallback: random choice from first options
      const priorities = participants
        .map((p) => normalizeOption(p.options[0]))
        .filter((opt) => opt !== "");

      const randomChoice =
        priorities[Math.floor(Math.random() * priorities.length)] || null;

      setResult({ type: "random", phrase, data: randomChoice });
    }
  }

  function resetGame() {
    setNumPlayers(2);
    setGameStarted(false);
    setParticipants([]);
    setCurrentPlayer(0);
    setResult(null);
  }

  return {
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
    resetGame,
  };
}
