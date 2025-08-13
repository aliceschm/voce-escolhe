interface ResultCardProps {
  title: string;
  text: string; // translated phrase from i18n
  result: string | null; // winner option
}

export function ResultCard({ title, text, result }: ResultCardProps) {
  return (
    <div className="result-card">
      <h1>{title}</h1>
      <p>
        {text} <strong>{result}</strong>
      </p>
    </div>
  );
}
