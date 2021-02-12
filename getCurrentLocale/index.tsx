import { getLocales } from "react-native-localize";

export const getCurrentLocale = function (): string {
  const locale = getLocales();
  return locale[0].languageCode;
};
