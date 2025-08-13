import Button from "./Button";

interface ParticipantCardProps {
  //Input props
  name: string;
  options: string[];

  //Callbacks
  onChangeName: (value: string) => void;
  onChangeOption: (index: number, value: string) => void;
  onSubmit: () => void;

  //UI props (for translation)
  text: string;
  nameLabel: string;
  namePlaceholder: string;
  optionLabel: (index: number) => string;
  optionPlaceholder: (index: number) => string;
}

export function ParticipantCard({
  text,
  name,
  options,
  onChangeName,
  onChangeOption,
  onSubmit,
  nameLabel,
  namePlaceholder,
  optionLabel,
  optionPlaceholder,
}: ParticipantCardProps) {
  return (
    <div className="card">
      <h1>{text}</h1>
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
        <Button label="Submit" onClick={onSubmit} />
      </div>
    </div>
  );
}
