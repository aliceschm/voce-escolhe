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
          <Button
            className="button secondary"
            label={instructionsLabel}
            onClick={onInstructions}
          />
          <Button className="button" label={startLabel} onClick={onStart} />
        </div>
      </div>
    </section>
  );
}

export {};
