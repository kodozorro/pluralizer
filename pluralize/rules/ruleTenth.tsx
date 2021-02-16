import { withNumberOrNot } from "../withNumberOrNot";

export const ruleTenth = function (
  number: number,
  words: string[],
  withNumber?: boolean,
  after?: boolean
): string {
  const lastDigit = Number(number.toString().slice(-1));
  const penultimateDigit = Number(number.toString().slice(-2)[0]);
  if (lastDigit === 1 && penultimateDigit === 0) {
    return withNumberOrNot(number, words[0], withNumber, after);
  } else if (lastDigit === 2 && penultimateDigit === 0) {
    return withNumberOrNot(number, words[1], withNumber, after);
  } else if ((lastDigit === 3 || lastDigit === 4) && penultimateDigit === 0) {
    return withNumberOrNot(number, words[2], withNumber, after);
  } else {
    return withNumberOrNot(number, words[3], withNumber, after);
  }
};
