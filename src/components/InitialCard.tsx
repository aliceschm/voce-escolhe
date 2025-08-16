import { PlayersDropdown } from "./PlayersDropdown";
import Button from "./Button";

interface InitialCardProps {
  text: string;
  numPlayers: number;
  buttonLabel: string;
  setNumPlayers: (n: number) => void;
  onStart: () => void;
}

export function InitialCard({
  text,
  numPlayers,
  buttonLabel,
  setNumPlayers,
  onStart,
}: InitialCardProps) {
  return (
    <div className="card">
      <h2>{text}</h2>
      <PlayersDropdown value={numPlayers} onChange={setNumPlayers} />
      <Button label={buttonLabel} onClick={onStart} />
    </div>
  );
}
