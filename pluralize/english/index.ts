export const pluralizeEnglish = function (
  number: number,
  words: string[]
): string {
  if (number === 1) {
    return words[0];
  } else {
    return words[1];
  }
};
