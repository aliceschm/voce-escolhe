import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      card: {
        name: "Your name",
      },
    },
  },
  pt: {
    translation: {
      card: {
        name: "Seu nome",
        p,
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    debug: true,
    fallbackLng: "pt",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
