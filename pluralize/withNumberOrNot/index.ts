export const withNumberOrNot = function (
  number: number,
  word: string,
  withNumber?: boolean
) {
  return withNumber ? `${number} ${word}` : word;
};
