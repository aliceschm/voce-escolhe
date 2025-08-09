import "../styles/themes.css";

interface CardProps {
  name: string;
  options: string[];
  onChangeName: (value: string) => void;
  onChangeOption: (index: number, value: string) => void;
}

export default function Card({
  name,
  options,
  onChangeName,
  onChangeOption,
}: CardProps) {
  return (
    <div className="card">
      <label>
        Nome:
        <input
          type="text"
          value={name}
          onChange={(e) => onChangeName(e.target.value)}
          placeholder="Digite seu nome"
        />
      </label>

      <div>
        {options.map((option, index) => (
          <label key={index}>
            Opção {index + 1}:
            <input
              type="text"
              value={option}
              onChange={(e) => onChangeOption(index, e.target.value)}
              placeholder={`Digite a opção ${index + 1}`}
            />
          </label>
        ))}
      </div>
    </div>
  );
}
