//Dropdown to choose qty of participants

interface NumberDropdownProps {
  value: number;
  onChange: (value: number) => void;
}

export function NumberDropdown({ value, onChange }: NumberDropdownProps) {
  return (
    <select value={value} onChange={(e) => onChange(Number(e.target.value))}>
      <option value={2}>2</option>
      <option value={3}>3</option>
      <option value={4}>4</option>
      <option value={5}>5</option>
    </select>
  );
}
