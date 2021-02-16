import { withNumberOrNot } from "../withNumberOrNot";

export const ruleSecond = function (
  number: number,
  words: string[],
  withNumber?: boolean,
  after?: boolean
): string {
  if (number === 0 || number === 1) {
    return withNumberOrNot(number, words[0], withNumber, after);
  } else {
    return withNumberOrNot(number, words[1], withNumber, after);
  }
};
