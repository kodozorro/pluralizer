export const checkLangForRuleNull = function (lang: string): boolean {
  return (
    lang === "zh" ||
    lang === "ja" ||
    lang === "ko" ||
    lang === "fa" ||
    lang === "tr" ||
    lang === "th" ||
    lang === "lo"
  );
};

export const checkLangForRuleOne = function (lang: string): boolean {
  return (
    lang === "da" ||
    lang === "nl" ||
    lang === "en" ||
    lang === "fo" ||
    lang === "de" ||
    lang === "nb" ||
    lang === "nn" ||
    lang === "sv" ||
    lang === "et" ||
    lang === "fi" ||
    lang === "hu" ||
    lang === "eu" ||
    lang === "el" ||
    lang === "he" ||
    lang === "it" ||
    lang === "pt" ||
    lang === "es" ||
    lang === "ca" ||
    lang === "vi"
  );
};

export const checkLangForRuleSecond = function (lang: string): boolean {
  return lang === "fr" || lang === "pt";
};

export const checkLangForRuleThird = function (lang: string): boolean {
  return lang === "lv";
};

export const checkLangForRuleFourth = function (lang: string): boolean {
  return lang === "gd";
};

export const checkLangForRuleFifth = function (lang: string): boolean {
  return lang === "ro";
};

export const checkLangForRuleSixth = function (lang: string): boolean {
  return lang === "lt";
};

export const checkLangForRuleSeventh = function (lang: string): boolean {
  return lang === "be" || lang === "ru" || lang === "uk";
};

export const checkLangForRuleEighth = function (lang: string): boolean {
  return lang === "sk" || lang === "cs";
};

export const checkLangForRuleNinth = function (lang: string): boolean {
  return lang === "pl";
};

export const checkLangForRuleTenth = function (lang: string): boolean {
  return lang === "sl" || lang === "sb";
};

export const checkLangForRuleEleventh = function (lang: string): boolean {
  return lang === "gd-ie";
};

export const checkLangForRuleTwelveth = function (lang: string): boolean {
  return lang === "ar";
};

export const checkLangForRuleThirteenth = function (lang: string): boolean {
  return lang === "mt";
};

export const checkLangForRuleFifteenth = function (lang: string): boolean {
  return lang === "is" || lang === "mk";
};

export const checkLangForRuleEighteenth = function (lang: string): boolean {
  return lang === "cy";
};

export const checkLangForRuleNineteenth = function (lang: string): boolean {
  return lang === "bs" || lang === "hr" || lang === "sr";
};
