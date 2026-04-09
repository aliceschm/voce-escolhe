import "../styles/themes.css";
interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}

function Button({ label, onClick, className }: ButtonProps) {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
