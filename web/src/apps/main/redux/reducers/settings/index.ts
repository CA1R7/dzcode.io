import { LanguageCode } from "src/apps/main/types";
import { getPersistedLanguage } from "src/localization";
import i18next from "i18next";

export interface SettingsState {
  darkMode: boolean;
  language: LanguageCode;
}

export const settings = (
  state: SettingsState = {
    darkMode: localStorage.getItem("darkMode") !== "off",
    language: getPersistedLanguage(),
  },
  action: {
    type: string;
    payload: SettingsState;
  },
) => {
  switch (action.type) {
    case "UPDATE_SETTINGS":
      localStorage.setItem("darkMode", action.payload.darkMode ? "on" : "off");
      if (action.payload.language !== undefined) {
        localStorage.setItem("language", action.payload.language);
        i18next.changeLanguage(action.payload.language);
      }
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
