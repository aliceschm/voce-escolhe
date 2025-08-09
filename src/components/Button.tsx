interface ButtonProps {
  text: string;
  onClick: () => void;
}

function Button({ text, onClick }: ButtonProps) {
  return (
    <button className="button-glass" onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
