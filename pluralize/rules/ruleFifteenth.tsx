import { withNumberOrNot } from "../withNumberOrNot";

export const ruleFifteenth = function (
  number: number,
  words: string[],
  withNumber?: boolean,
  after?: boolean
): string {
  const lastDigit = Number(number.toString().slice(-1));
  if (lastDigit === 1 && number !== 11) {
    return withNumberOrNot(number, words[0], withNumber, after);
  } else {
    return withNumberOrNot(number, words[1], withNumber, after);
  }
};
