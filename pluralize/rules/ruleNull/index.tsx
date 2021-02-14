import { withNumberOrNot } from "../../withNumberOrNot";

export const ruleNull = function (
  number: number,
  words: string[],
  withNumber?: boolean,
  after?: boolean
): string {
  return withNumberOrNot(number, words[0], withNumber, after);
};
