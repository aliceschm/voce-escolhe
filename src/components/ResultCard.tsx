interface ResultCardProps {
  text: string; // translated phrase from i18n
  result: string; // winner option
}

export function ResultCard({ text, result }: ResultCardProps) {
  return (
    <div className="result-card">
      <p>
        {text} <strong>{result}</strong>
      </p>
    </div>
  );
}
