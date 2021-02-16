import { withNumberOrNot } from "../withNumberOrNot";

export const ruleFourth = function (
  number: number,
  words: string[],
  withNumber?: boolean,
  after?: boolean
): string {
  if (number === 1 || number === 11) {
    return withNumberOrNot(number, words[0], withNumber, after);
  } else if (number === 2 || number === 12) {
    return withNumberOrNot(number, words[1], withNumber, after);
  } else if ((number >= 3 && number <= 10) || (number >= 13 && number <= 19)) {
    return withNumberOrNot(number, words[2], withNumber, after);
  } else {
    return withNumberOrNot(number, words[3], withNumber, after);
  }
};
