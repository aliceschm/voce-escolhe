import { NumberDropdown } from "./NumberDropdown";
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
  setNumPlayers,
  onStart,
}: InitialCardProps) {
  return (
    <div className="initial-card">
      <h2>{text}</h2>
      <NumberDropdown value={numPlayers} onChange={setNumPlayers} />
      <Button label="Start" onClick={onStart} />
    </div>
  );
}
