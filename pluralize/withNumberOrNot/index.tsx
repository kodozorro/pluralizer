import { beforeWordOrAfter } from "./beforeWordOrAfter";

export const withNumberOrNot = function (
  number: number,
  word: string,
  withNumber?: boolean,
  after?: boolean
) {
  return withNumber ? beforeWordOrAfter(number, word, after) : word;
};
