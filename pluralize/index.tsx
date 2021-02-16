import { getCurrentLocale } from "../getCurrentLocale";
import {
  ruleEighteenth,
  ruleEighth,
  ruleEleventh,
  ruleFifteenth,
  ruleFifth,
  ruleFourth,
  ruleNinteenth,
  ruleNinth,
  ruleNull,
  ruleOne,
  ruleSecond,
  ruleSeven,
  ruleSixth,
  ruleTenth,
  ruleThird,
  ruleThirteenth,
  ruleTwelveth,
} from "./rules";

export function chooseLanguageGroup(
  number: number,
  words: string[],
  withNumber?: boolean,
  after?: boolean,
  locale?: string
): string | undefined | Error {
  const localeLanguage = locale ? locale : getCurrentLocale();

  const rules = {
    zh: ruleNull(number, words, withNumber, after),
    ja: ruleNull(number, words, withNumber, after),
    ko: ruleNull(number, words, withNumber, after),
    fa: ruleNull(number, words, withNumber, after),
    tr: ruleNull(number, words, withNumber, after),
    th: ruleNull(number, words, withNumber, after),
    lo: ruleNull(number, words, withNumber, after),

    da: ruleOne(number, words, withNumber, after),
    nl: ruleOne(number, words, withNumber, after),
    en: ruleOne(number, words, withNumber, after),
    fo: ruleOne(number, words, withNumber, after),
    de: ruleOne(number, words, withNumber, after),
    nb: ruleOne(number, words, withNumber, after),
    nn: ruleOne(number, words, withNumber, after),
    sv: ruleOne(number, words, withNumber, after),
    et: ruleOne(number, words, withNumber, after),
    fi: ruleOne(number, words, withNumber, after),
    hu: ruleOne(number, words, withNumber, after),
    eu: ruleOne(number, words, withNumber, after),
    el: ruleOne(number, words, withNumber, after),
    he: ruleOne(number, words, withNumber, after),
    it: ruleOne(number, words, withNumber, after),
    pt: ruleOne(number, words, withNumber, after),
    es: ruleOne(number, words, withNumber, after),
    ca: ruleOne(number, words, withNumber, after),
    vi: ruleOne(number, words, withNumber, after),

    fr: ruleSecond(number, words, withNumber, after),

    lv: ruleThird(number, words, withNumber, after),

    gd: ruleFourth(number, words, withNumber, after),

    ro: ruleFifth(number, words, withNumber, after),

    lt: ruleSixth(number, words, withNumber, after),

    be: ruleSeven(number, words, withNumber, after),
    ru: ruleSeven(number, words, withNumber, after),
    uk: ruleSeven(number, words, withNumber, after),

    sk: ruleEighth(number, words, withNumber, after),
    cs: ruleEighth(number, words, withNumber, after),

    pl: ruleNinth(number, words, withNumber, after),

    sl: ruleTenth(number, words, withNumber, after),
    sb: ruleTenth(number, words, withNumber, after),

    "gd-ie": ruleEleventh(number, words, withNumber, after),

    ar: ruleTwelveth(number, words, withNumber, after),

    mt: ruleThirteenth(number, words, withNumber, after),

    is: ruleFifteenth(number, words, withNumber, after),
    mk: ruleFifteenth(number, words, withNumber, after),

    cy: ruleEighteenth(number, words, withNumber, after),

    bs: ruleNinteenth(number, words, withNumber, after),
    hr: ruleNinteenth(number, words, withNumber, after),
    sr: ruleNinteenth(number, words, withNumber, after),
  };

  let result = rules[localeLanguage](number, words, withNumber, after);

  return result
    ? result
    : new Error(
        "Incorrect locale language code! Please, check if it returns one of: zh, ja, ko, fa, tr, th, lo, da, nl, en, fo, de, nb, nn, sv, et, fi, hu, eu, el, he, it, pt, es, ca, vi, fr, pt, lv, gd, ro, lt, be, ru, uk, sk, cs, pl, sl, sb, gd-ie, ar, mt, is, mk, cy, bs, hr, sr"
      );
}
