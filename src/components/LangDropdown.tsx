import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function LangDropdown() {
  const { i18n } = useTranslation();
  const [selected, setSelected] = useState<"en" | "pt">("en");
  const [open, setOpen] = useState(false);

  const handleSelect = (val: "en" | "pt") => {
    setSelected(val);
    i18n.changeLanguage(val);
    setOpen(false);
  };

  return (
    <div className="dropdown" onMouseLeave={() => setOpen(false)}>
      <div className="selected" onClick={() => setOpen((prev) => !prev)}>
        {selected === "en" ? "English" : "Português (Brasil)"}
      </div>

      <ul className={`options ${open ? "open" : ""}`}>
        {selected !== "en" && (
          <li onClick={() => handleSelect("en")}>English</li>
        )}
        {selected !== "pt" && (
          <li onClick={() => handleSelect("pt")}>Português (Brasil)</li>
        )}
      </ul>
    </div>
  );
}
