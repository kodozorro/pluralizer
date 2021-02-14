import { withNumberOrNot } from "../../withNumberOrNot";

export const ruleThird = function (
  number: number,
  words: string[],
  withNumber?: boolean,
  after?: boolean
): string {
  const lastDigit = Number(number.toString().slice(-1));

  if (number === 0) {
    return withNumberOrNot(number, words[0], withNumber, after);
  } else if (lastDigit === 1 && number !== 11) {
    return withNumberOrNot(number, words[1], withNumber, after);
  } else {
    return withNumberOrNot(number, words[2], withNumber, after);
  }
};
