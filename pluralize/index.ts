import { getCurrentLocale } from "../getCurrentLocale";
import { pluralizeEnglish } from "./english";
import { pluralizeRussian } from "./russian";

export function chooseLanguageGroup(
  number: number,
  words: string[]
): string | undefined {
  const localeLanguage = getCurrentLocale();

  if (localeLanguage === "en") {
    return pluralizeEnglish(number, words);
  }

  if (localeLanguage === "ru") {
    return pluralizeRussian(number, words);
  }
}
