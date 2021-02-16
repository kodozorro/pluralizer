import { withNumberOrNot } from "../withNumberOrNot";

export const ruleEighth = function (
  number: number,
  words: string[],
  withNumber?: boolean,
  after?: boolean
): string {
  if (number === 1) {
    return withNumberOrNot(number, words[0], withNumber, after);
  } else if (number >= 2 && number <= 4) {
    return withNumberOrNot(number, words[1], withNumber, after);
  } else {
    return withNumberOrNot(number, words[2], withNumber, after);
  }
};
