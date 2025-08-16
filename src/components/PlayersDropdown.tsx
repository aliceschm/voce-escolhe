import { useState } from "react";

interface PlayersDropdownProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

export function PlayersDropdown({
  value,
  onChange,
  min = 2,
  max = 8,
}: PlayersDropdownProps) {
  const [open, setOpen] = useState(false);
  const options = Array.from({ length: max - min + 1 }, (_, i) => i + min);

  const handleSelect = (n: number) => {
    onChange(n);
    setOpen(false);
  };

  return (
    <div className="dropdown" onMouseLeave={() => setOpen(false)}>
      <div className="selected" onClick={() => setOpen((prev) => !prev)}>
        {value}
      </div>

      <ul className={`options ${open ? "open" : ""}`}>
        {options
          .filter((n) => n !== value)
          .map((n) => (
            <li key={n} onClick={() => handleSelect(n)}>
              {n}
            </li>
          ))}
      </ul>
    </div>
  );
}
