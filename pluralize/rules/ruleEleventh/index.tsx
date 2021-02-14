import { withNumberOrNot } from "../../withNumberOrNot";

export const ruleEleventh = function (
  number: number,
  words: string[],
  withNumber?: boolean,
  after?: boolean
): string {
  if (number === 1) {
    return withNumberOrNot(number, words[0], withNumber, after);
  } else if (number === 2) {
    return withNumberOrNot(number, words[1], withNumber, after);
  } else if (number >= 3 && number <= 6) {
    return withNumberOrNot(number, words[2], withNumber, after);
  } else if (number >= 6 && number <= 10) {
    return withNumberOrNot(number, words[3], withNumber, after);
  } else {
    return withNumberOrNot(number, words[4], withNumber, after);
  }
};
