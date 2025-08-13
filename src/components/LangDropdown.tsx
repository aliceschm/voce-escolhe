interface LangDropdownProps {
  value: string;
  onChange: (value: string) => void;
}

export function LangDropdown({ value, onChange }: LangDropdownProps) {
  return (
    <select value={value} onChange={(e) => onChange(String(e.target.value))}>
      <option value={"en"}>English</option>
      <option value={"pt"}>Português (Brasil)</option>
    </select>
  );
}
