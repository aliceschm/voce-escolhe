import Button from "./Button";

//TODO:
//change button function (add function to submit options)
interface CardProps {
  //Input props
  name: string;
  options: string[];
  onChangeName: (value: string) => void;
  onChangeOption: (index: number, value: string) => void;

  //Html props (for translation purposes)
  nameLabel: string;
  namePlaceholder: string;
  optionLabel: (index: number) => string;
  optionPlaceholder: (index: number) => string;
}

export default function Card({
  name,
  options,
  onChangeName,
  onChangeOption,
  nameLabel,
  namePlaceholder,
  optionLabel,
  optionPlaceholder,
}: CardProps) {
  return (
    <div className="card">
      <label>
        {nameLabel}
        <input
          type="text"
          value={name}
          onChange={(e) => onChangeName(e.target.value)}
          placeholder={namePlaceholder}
        />
      </label>

      <div>
        {options.map((option, index) => (
          <label key={index}>
            {optionLabel(index)}
            <input
              type="text"
              value={option}
              onChange={(e) => onChangeOption(index, e.target.value)}
              placeholder={optionPlaceholder(index)}
            />
          </label>
        ))}
      </div>
      <div>
        <Button label="Submit" onClick={() => alert("Button clicked!")} />
      </div>
    </div>
  );
}
