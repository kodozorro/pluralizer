import { withNumberOrNot } from "../../withNumberOrNot";

export const ruleSixth = function (
  number: number,
  words: string[],
  withNumber?: boolean,
  after?: boolean
): string {
  const lastDigit = Number(number.toString().slice(-1));
  const lastTwoDigits = Number(number.toString().slice(-2));
  if (lastDigit === 1 && number !== 11) {
    return withNumberOrNot(number, words[0], withNumber, after);
  } else if (lastDigit === 0 || (lastTwoDigits >= 11 && lastTwoDigits <= 19)) {
    return withNumberOrNot(number, words[1], withNumber, after);
  } else {
    return withNumberOrNot(number, words[2], withNumber, after);
  }
};
