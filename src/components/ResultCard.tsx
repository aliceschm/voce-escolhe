import Button from "./Button";
interface ResultCardProps {
  title: string;
  text: string; // translated phrase from i18n
  result: string | null; // winner option
  buttonLabel: string;
  onRestart: () => void;
}

export function ResultCard({
  title,
  text,
  result,
  buttonLabel,
  onRestart,
}: ResultCardProps) {
  return (
    <div className="card">
      <div className="content-container">
        <h2>{title}</h2>
        <p>{text} </p>
        <p>
          <strong>{result}</strong>
        </p>

        <Button label={buttonLabel} onClick={onRestart} />
      </div>
    </div>
  );
}
