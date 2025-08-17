import Button from "./Button";

interface ParticipantCardProps {
  // Input props
  name: string;
  options: string[];

  // Callbacks
  onChangeName: (value: string) => void;
  onChangeOption: (index: number, value: string) => void;
  onSubmit: () => void;

  // UI props (for translation)
  buttonLabel: string;
  text: string;
  nameLabel: string;
  namePlaceholder: string;
  optionLabel: (index: number) => string;
  optionPlaceholder: (index: number) => string;
}

export function ParticipantCard({
  buttonLabel,
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
      <div className="content-container">
        <h1>{text}</h1>

        <div className="fields-container">
          <div className="field-group">
            <label htmlFor="name">{nameLabel}</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => onChangeName(e.target.value)}
              placeholder={namePlaceholder}
            />
          </div>

          {options.map((option, index) => (
            <div key={index} className="field-group">
              <label htmlFor={`option-${index}`}>{optionLabel(index)}</label>
              <input
                id={`option-${index}`}
                type="text"
                value={option}
                onChange={(e) => onChangeOption(index, e.target.value)}
                placeholder={optionPlaceholder(index)}
              />
            </div>
          ))}
        </div>

        <Button label={buttonLabel} onClick={onSubmit} />
      </div>
    </div>
  );
}
