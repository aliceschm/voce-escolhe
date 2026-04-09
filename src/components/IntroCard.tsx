import Button from "./Button";

interface IntroCardProps {
  text: string;
  steps: string[];
  buttonLabel: string;
  onStart: () => void;
}

export function IntroCard({
  text,
  steps,
  buttonLabel,
  onStart,
}: IntroCardProps) {
  return (
    <div className="card">
      <div className="content-container">
        <h2>{text}</h2>

        <div className="fields-container">
          {steps.map((step, index) => (
            <p key={index}>{step}</p>
          ))}
        </div>

        <Button label={buttonLabel} onClick={onStart} />
      </div>
    </div>
  );
}
