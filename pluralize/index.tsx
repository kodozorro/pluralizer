import { getCurrentLocale } from "../getCurrentLocale";
import {
  checkLangForRuleEighteenth,
  checkLangForRuleEighth,
  checkLangForRuleEleventh,
  checkLangForRuleFifteenth,
  checkLangForRuleFifth,
  checkLangForRuleFourth,
  checkLangForRuleNineteenth,
  checkLangForRuleNinth,
  checkLangForRuleNull,
  checkLangForRuleOne,
  checkLangForRuleSecond,
  checkLangForRuleSeventh,
  checkLangForRuleSixth,
  checkLangForRuleTenth,
  checkLangForRuleThird,
  checkLangForRuleThirteenth,
  checkLangForRuleTwelveth,
} from "./checkLanguage";
import { ruleEighteenth } from "./rules/ruleEighteenth";
import { ruleEighth } from "./rules/ruleEighth";
import { ruleEleventh } from "./rules/ruleEleventh";
import { ruleFifteenth } from "./rules/ruleFifteenth";
import { ruleFifth } from "./rules/ruleFifth";
import { ruleFourth } from "./rules/ruleFourth";
import { ruleNinteenth } from "./rules/ruleNinteenth";
import { ruleNinth } from "./rules/ruleNinth";
import { ruleNull } from "./rules/ruleNull";
import { ruleOne } from "./rules/ruleOne";
import { ruleSecond } from "./rules/ruleSecond";
import { ruleSeven } from "./rules/ruleSeven";
import { ruleSixth } from "./rules/ruleSixth";
import { ruleTenth } from "./rules/ruleTenth";
import { ruleThird } from "./rules/ruleThird";
import { ruleThirteenth } from "./rules/ruleThirteenth";
import { ruleTwelveth } from "./rules/ruleTwelveth";

export function chooseLanguageGroup(
  number: number,
  words: string[],
  withNumber?: boolean,
  after?: boolean,
  locale?: string
): string | undefined | Error {
  const localeLanguage = locale ? locale : getCurrentLocale();

  if (checkLangForRuleNull(localeLanguage)) {
    return ruleNull(number, words, withNumber, after);
  }

  if (checkLangForRuleOne(localeLanguage)) {
    return ruleOne(number, words, withNumber, after);
  }

  if (checkLangForRuleSecond(localeLanguage)) {
    return ruleSecond(number, words, withNumber, after);
  }

  if (checkLangForRuleThird(localeLanguage)) {
    return ruleThird(number, words, withNumber, after);
  }

  if (checkLangForRuleFourth(localeLanguage)) {
    return ruleFourth(number, words, withNumber, after);
  }

  if (checkLangForRuleFifth(localeLanguage)) {
    return ruleFifth(number, words, withNumber, after);
  }

  if (checkLangForRuleSixth(localeLanguage)) {
    return ruleSixth(number, words, withNumber, after);
  }

  if (checkLangForRuleSeventh(localeLanguage)) {
    return ruleSeven(number, words, withNumber, after);
  }

  if (checkLangForRuleEighth(localeLanguage)) {
    return ruleEighth(number, words, withNumber, after);
  }

  if (checkLangForRuleNinth(localeLanguage)) {
    return ruleNinth(number, words, withNumber, after);
  }

  if (checkLangForRuleTenth(localeLanguage)) {
    return ruleTenth(number, words, withNumber, after);
  }

  if (checkLangForRuleEleventh(localeLanguage)) {
    return ruleEleventh(number, words, withNumber, after);
  }

  if (checkLangForRuleTwelveth(localeLanguage)) {
    return ruleTwelveth(number, words, withNumber, after);
  }

  if (checkLangForRuleThirteenth(localeLanguage)) {
    return ruleThirteenth(number, words, withNumber, after);
  }

  if (checkLangForRuleFifteenth(localeLanguage)) {
    return ruleFifteenth(number, words, withNumber, after);
  }

  if (checkLangForRuleEighteenth(localeLanguage)) {
    return ruleEighteenth(number, words, withNumber, after);
  }

  if (checkLangForRuleNineteenth(localeLanguage)) {
    return ruleNinteenth(number, words, withNumber, after);
  }

  return new Error(
    "Incorrect locale language code! Please, check if it returns one of: zh, ja, ko, fa, tr, th, lo, da, nl, en, fo, de, nb, nn, sv, et, fi, hu, eu, el, he, it, pt, es, ca, vi, fr, pt, lv, gd, ro, lt, be, ru, uk, sk, cs, pl, sl, sb, gd-ie, ar, mt, is, mk, cy, bs, hr, sr"
  );
}
