import { getCurrentLocale } from "../getCurrentLocale";
import { checkLangForRuleNull } from "./checkLanguage";
import { ruleNull } from "./rules/ruleNull";
import { ruleOne } from "./rules/ruleOne";
import { ruleSeven } from "./rules/ruleSeven";

export function chooseLanguageGroup(
  number: number,
  words: string[],
  withNumber?: boolean,
  after?: boolean
): string | undefined {
  const localeLanguage = getCurrentLocale();

  if (checkLangForRuleNull(localeLanguage)) {
    return ruleNull(number, words, withNumber, after);
  }

  if (localeLanguage === "en") {
    return ruleOne(number, words, withNumber, after);
  }

  if (localeLanguage === "ru") {
    return ruleSeven(number, words, withNumber, after);
  }
}
