import { useState } from "react";

export default function LangDropdown() {
  const [selected, setSelected] = useState<"en" | "pt">("en");
  const [open, setOpen] = useState(false);

  const handleSelect = (val: "en" | "pt") => {
    setSelected(val);
    setOpen(false);
  };

  return (
    <div>
      <div onClick={() => setOpen((prev) => !prev)}>
        {selected === "en" ? "English" : "Português (Brasil)"}
      </div>
      {open && (
        <ul>
          <li onClick={() => handleSelect("en")}>English</li>
          <li onClick={() => handleSelect("pt")}>Português (Brasil)</li>
        </ul>
      )}
    </div>
  );
}
