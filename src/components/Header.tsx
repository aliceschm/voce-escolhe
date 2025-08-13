import { LangDropdown } from "./LangDropdown";
import { useTranslation } from "react-i18next";

export function Header() {
  const { i18n } = useTranslation();

  return (
    <LangDropdown
      value={i18n.language}
      onChange={(lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem("lang", lang);
      }}
    />
  );
}
