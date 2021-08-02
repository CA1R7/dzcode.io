import { LanguageCode } from "src/apps/main/types";
import { getPersistedLanguage } from ".";

describe("src/localization/index.spec.ts", () => {
  // preserve the old localStorage object each time
  beforeEach(() => {
    localStorage.clear();
  });
  afterAll(() => {
    localStorage.clear();
  });

  test("persisted language defaults to 'en' when localStorage is empty", () => {
    expect(getPersistedLanguage()).toBe<LanguageCode>("en");
  });

  test("persisted language defaults to 'en' when localStorage value is incorrect", () => {
    localStorage.setItem("language", "not a language code");
    expect(getPersistedLanguage()).toBe<LanguageCode>("en");
  });

  test("persisted language is 'fr' when localStorage value 'fr'", () => {
    localStorage.setItem("language", "fr");
    expect(getPersistedLanguage()).toBe<LanguageCode>("fr");
  });

  test("persisted language is 'ar' when localStorage value 'ar'", () => {
    localStorage.setItem("language", "ar");
    expect(getPersistedLanguage()).toBe<LanguageCode>("ar");
  });
});
