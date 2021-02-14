import { withNumberOrNot } from "../../withNumberOrNot";

export const ruleTwelveth = function (
  number: number,
  words: string[],
  withNumber?: boolean,
  after?: boolean
): string {
  const lastDigit = Number(number.toString().slice(-1));
  const penultimateDigit = Number(number.toString().slice(-2)[0]);
  const lastTwoDigits = Number(number.toString().slice(-2));
  if (number == 1) {
    return withNumberOrNot(number, words[0], withNumber, after);
  } else if (number === 2) {
    return withNumberOrNot(number, words[1], withNumber, after);
  } else if (
    (number >= 3 && number <= 10) ||
    (lastDigit >= 3 && lastDigit < 10 && penultimateDigit === 0) ||
    lastTwoDigits === 10
  ) {
    return withNumberOrNot(number, words[2], withNumber, after);
  } else if (lastDigit >= 0 && lastDigit <= 2 && penultimateDigit === 0) {
    return withNumberOrNot(number, words[4], withNumber, after);
  } else if (number !== 0) {
    return withNumberOrNot(number, words[3], withNumber, after);
  } else {
    return withNumberOrNot(number, words[5], withNumber, after);
  }
};
