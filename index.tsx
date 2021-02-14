import { chooseLanguageGroup } from "./pluralize";

/**
 * @param {number}  number - A number, which is used for plural or singular form.
 * @param {string[]} words - An array of words, which you want to be pluralized.
 * @param {boolean} [withNumber] - optional param, if true retuns string with a number before word.
 * @param {boolean} [after] - optional param, if true returns string with a number after word.
 * @param {string} [locale] - optional param, if you hve ready locale code, you can pass it.
 * @returns {string} This is the result word with needed plural or singular form.
 */
export const pluralize = function (
  number: number,
  words: string[],
  withNumber?: boolean,
  after?: boolean,
  locale?: string
): string | Error | undefined {
  return chooseLanguageGroup(number, words, withNumber, after, locale);
};
