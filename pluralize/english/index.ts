import { withNumberOrNot } from "../withNumberOrNot";

export const pluralizeEnglish = function (
  number: number,
  words: string[],
  withNumber?: boolean
): string {
  if (number === 1) {
    return withNumberOrNot(number, words[0], withNumber);
  } else {
    return withNumberOrNot(number, words[1], withNumber);
  }
};
