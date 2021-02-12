export const pluralizeRussian = function (
  number: number,
  words: string[]
): string {
  const lastDigit = Number(number.toString().split("").pop());
  if (lastDigit === 1 && number !== 11) {
    return words[0];
  } else if (lastDigit >= 2 && lastDigit <= 4 && (number < 12 || number > 14)) {
    return words[1];
  } else if (Number.isInteger(number)) {
    return words[2];
  } else {
    return words[1];
  }
};
