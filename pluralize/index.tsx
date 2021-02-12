import { getCurrentLocale } from "../getCurrentLocale";
import { ruleOne } from "./rules/ruleOne";
import { ruleSeven } from "./rules/ruleSeven";

export function chooseLanguageGroup(
  number: number,
  words: string[],
  withNumber?: boolean,
  after?: boolean
): string | undefined {
  const localeLanguage = getCurrentLocale();

  if (localeLanguage === "en") {
    return ruleOne(number, words, withNumber, after);
  }

  if (localeLanguage === "ru") {
    return ruleSeven(number, words, withNumber, after);
  }
}
