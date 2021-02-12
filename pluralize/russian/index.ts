import { withNumberOrNot } from "../withNumberOrNot";

export const pluralizeRussian = function (
  number: number,
  words: string[],
  withNumber?: boolean
): string {
  const lastDigit = Number(number.toString().split("").pop());
  if (lastDigit === 1 && number !== 11) {
    return withNumberOrNot(number, words[0], withNumber);
  } else if (lastDigit >= 2 && lastDigit <= 4 && (number < 12 || number > 14)) {
    return words[1];
  } else if (Number.isInteger(number)) {
    return withNumberOrNot(number, words[2], withNumber);
  } else {
    return withNumberOrNot(number, words[1], withNumber);
  }
};
