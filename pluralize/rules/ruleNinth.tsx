import { withNumberOrNot } from "../withNumberOrNot";

export const ruleNinth = function (
  number: number,
  words: string[],
  withNumber?: boolean,
  after?: boolean
): string {
  const lastDigit = Number(number.toString().slice(-1));
  if (number === 1) {
    return withNumberOrNot(number, words[0], withNumber, after);
  } else if (lastDigit >= 2 && lastDigit <= 4 && (number < 12 || number > 14)) {
    return withNumberOrNot(number, words[1], withNumber, after);
  } else {
    return withNumberOrNot(number, words[2], withNumber, after);
  }
};
