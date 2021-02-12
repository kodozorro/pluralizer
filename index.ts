import { chooseLanguageGroup } from "./pluralize";

export const pluralize = function (number: number, words: string[]) {
  chooseLanguageGroup(number, words);
};
