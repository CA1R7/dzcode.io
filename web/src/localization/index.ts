import { LanguageCode } from "src/apps/main/types";
import { ar } from "./ar";
import { en } from "./en";
import { fr } from "./fr";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

/**
 * Get the language that is presided in the localStore of the browser, and defaults to "en" is no language is found
 */
export const getPersistedLanguage = () => {
  const languages: LanguageCode[] = ["fr", "en", "ar"];
  const persistedLanguage = localStorage.getItem("language") as LanguageCode;
  return languages.includes(persistedLanguage) ? persistedLanguage : "en";
};

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: { ...en } },
    fr: { translation: { ...fr } },
    ar: { translation: { ...ar } },
  },
  lng: getPersistedLanguage(),
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});
