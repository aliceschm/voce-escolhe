import Button from "./Button";

interface HeroProps {
  title: string;
  subtitle: string;
  startLabel: string;
  instructionsLabel: string;
  onStart: () => void;
  onInstructions: () => void;
}

export function Hero({
  title,
  subtitle,
  startLabel,
  instructionsLabel,
  onStart,
  onInstructions,
}: HeroProps) {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>

        <div className="hero-actions">
          <Button label={startLabel} onClick={onStart} />
          <Button label={instructionsLabel} onClick={onInstructions} />
        </div>
      </div>
    </section>
  );
}

export {};
