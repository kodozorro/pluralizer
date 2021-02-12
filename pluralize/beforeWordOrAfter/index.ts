export const beforeWordOrAfter = function (
  number: number,
  word: string,
  after?: boolean
) {
  return after ? `${word} ${number}` : `${number} ${word}`;
};
