export const beforeWordOrAfter = function (
  number: number,
  word: string,
  after?: boolean
): string | undefined {
  return after ? `${word} ${number}` : `${number} ${word}`;
};
