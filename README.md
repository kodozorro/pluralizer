# @kodozorro/pluralizer

![npm](https://img.shields.io/npm/v/pluralizer)
![npm bundle size](https://img.shields.io/bundlephobia/min/pluralizer)

Chooses right plural form for different languages. Was made for React native purpose with TypeScript.

- [@kodozorro/pluralizer](#kodozorropluralizer)
  - [List of languages it can work with](#list-of-languages-it-can-work-with)
  - [Why should I use it?](#why-should-i-use-it)
  - [Install](#install)
  - [Usage](#usage)
    - [Prepare your plural forms](#prepare-your-plural-forms)
  - [Function `pluralizer()`](#function-pluralizer)
  - [List of Plural Rules in different language families](#list-of-plural-rules-in-different-language-families)
    - [Plural rule #0 (1 form) Asian, Persian, Turkic/Altaic (Turkish), Thai, Lao](#plural-rule-0-1-form-asian-persian-turkicaltaic-turkish-thai-lao)
    - [Plural rule #1 (2 forms): Germanic, Finno-Ugric, Language isolate, Latin/Greek, Semitic (Hebrew), Romanic, Vietnamese](#plural-rule-1-2-forms-germanic-finno-ugric-language-isolate-latingreek-semitic-hebrew-romanic-vietnamese)
    - [Plural rule #2 (2 forms): Romanic (French, Brazilian Portuguese), Lingala](#plural-rule-2-2-forms-romanic-french-brazilian-portuguese-lingala)
    - [Plural rule #3 (3 forms): Baltic (Latvian, Latgalian)](#plural-rule-3-3-forms-baltic-latvian-latgalian)
    - [Plural rule #4 (4 forms): Celtic (Scottish Gaelic)](#plural-rule-4-4-forms-celtic-scottish-gaelic)
    - [Plural rule #5 (3 forms): Romanic (Romanian)](#plural-rule-5-3-forms-romanic-romanian)
    - [Plural rule #6 (3 forms): Baltic (Lithuanian)](#plural-rule-6-3-forms-baltic-lithuanian)
    - [Plural rule #7 (3 forms): Belarusian, Russian, Ukrainian](#plural-rule-7-3-forms-belarusian-russian-ukrainian)
    - [Plural rule #8 (3 forms): Slavic (Slovak, Czech)](#plural-rule-8-3-forms-slavic-slovak-czech)
    - [Plural rule #9 (3 forms): Slavic (Polish)](#plural-rule-9-3-forms-slavic-polish)
    - [Plural rule #10 (4 forms): Slavic (Slovenian, Sorbian)](#plural-rule-10-4-forms-slavic-slovenian-sorbian)
    - [Plural rule #11 (5 forms): Celtic (Irish Gaelic)](#plural-rule-11-5-forms-celtic-irish-gaelic)
    - [Plural rule #12 (6 forms): Semitic (Arabic)](#plural-rule-12-6-forms-semitic-arabic)
    - [Plural rule #13 (4 forms): Semitic (Maltese)](#plural-rule-13-4-forms-semitic-maltese)
    - [Plural rule #14 (3 forms): unused](#plural-rule-14-3-forms-unused)
    - [Plural rule #15 (2 forms): Icelandic, Macedonian](#plural-rule-15-2-forms-icelandic-macedonian)
    - [Plural rule #16 (5 forms): Celtic (Breton)](#plural-rule-16-5-forms-celtic-breton)
    - [Plural rule #17 (2 forms): Ecuador indigenous languages (Shuar)](#plural-rule-17-2-forms-ecuador-indigenous-languages-shuar)
    - [Plural rule #18 (6 forms): Welsh](#plural-rule-18-6-forms-welsh)
    - [Plural rule #19 (3 forms): Slavic (Bosnian, Croatian, Serbian)](#plural-rule-19-3-forms-slavic-bosnian-croatian-serbian)

## List of languages it can work with

- Asian, Persian, Turkic/Altaic (Turkish), Thai, Lao
- Germanic, Finno-Ugric, Language isolate, Latin/Greek, Semitic (Hebrew), Romanic, Vietnamese
- Romanic (French, Brazilian Portuguese), Lingala
- Baltic (Latvian, Latgalian)
- Celtic (Scottish Gaelic)
- Romanic (Romanian)
- Baltic (Lithuanian)
- Belarusian, Russian, Ukrainian
- Slavic (Slovak, Czech)
- Slavic (Polish)
- Slavic (Slovenian, Sorbian)
- Celtic (Irish Gaelic)
- Semitic (Arabic)
- Semitic (Maltese)
- Icelandic, Macedonian
- Celtic (Breton)
- Ecuador indigenous languages (Shuar)
- Welsh
- Slavic (Bosnian, Croatian, Serbian)

## Why should I use it?

Well, let me try to explain.

Imagine you need to make dynamic forms of ome words in your app. With i18n, for more than one language. If it's Germanic language family, it'll be easy because they have 2 plural forms just.
But if it's [Russian](#plural-rule-7-3-forms-belarusian-russian-ukrainian)? With 3 forms and some exceptions?
Or even [Semitic (Arabic)](#plural-rule-12-6-forms-semitic-arabic)? With 6 forms and exceptions also? And you need to make a lot of translation work with plural forms, understand how to manage with words depending on number if it's dynamic.

This small tool can do it for you.

## Install

This package uses `react-native-localize` to get current locale on phone. It works both on Android and IPhones. So, please install it too.

```
$ npm install @kodozorro/pluralizer
$ npm install react-native-localize
```

## Usage

```ts
import pluralizer from "@kodozorro/pluralizer";

pluralizer(["Bird", "Birds"], 5);
//=> "Birds"

pluralizer(["Bird", "Birds"], 5, true);
//=> "5 Birds"

pluralizer(["Bird", "Birds"], 5, true, true);
//=> "Birds 5"
```

This tool works with prepared words, it **doesn't generate anything!!**

### Prepare your plural forms

You must provide your array of words, which can be used. Translation of that is your responsibility.

**You must know the plural rule of your language!!** But, I'll show them [further](#list-of-plural-rules).

**Please follow the correct order of the forms!!!**

For example, if it is word `Bird` you want to pluralize, than you must have an array like this:

```ts
["Bird", "Birds"];
```

Due to two plural forms in English.

If it is Russian language, than array of three words:

```ts
["Синица", "Синицы", "Синиц"];
```

Due to three plural forms in these language.

## Function `pluralizer()`

It takes three arguments:

```ts
["Bird", "Birds"];
```

A number which you want to use with this word

```ts
5;
```

if you want to return string with a number than add third boolean argument true.

## List of Plural Rules in different language families

[Provided by MDN](https://developer.mozilla.org/en-US/docs/Mozilla/Localization/Localization_and_Plurals#list_of_plural_rules)

### Plural rule #0 (1 form) Asian, Persian, Turkic/Altaic (Turkish), Thai, Lao

**Families**: _Asian (Chinese, Japanese, Korean), Persian, Turkic/Altaic (Turkish), Thai, Lao_

- everything: `0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, …`

### Plural rule #1 (2 forms): Germanic, Finno-Ugric, Language isolate, Latin/Greek, Semitic (Hebrew), Romanic, Vietnamese

**Families**: _Germanic (Danish, Dutch, English, Faroese, German, Norwegian, Swedish), Finno-Ugric (Estonian, Finnish, Hungarian), Language isolate (Basque), Latin/Greek (Greek), Semitic (Hebrew), Romanic (Italian, Portuguese, Spanish, Catalan), Vietnamese_

- is 1: `1`
- everything else: `0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, …`

### Plural rule #2 (2 forms): Romanic (French, Brazilian Portuguese), Lingala

**Families**: _Romanic (French, Brazilian Portuguese), Lingala_

- is 0 or 1: `0, 1`
- everything else: `2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, …`

### Plural rule #3 (3 forms): Baltic (Latvian, Latgalian)

**Families**: _Baltic (Latvian, Latgalian)_

- ends in 0: `0`
- ends in 1, excluding 11: `1, 21, 31, 41, 51, 61, 71, 81, 91, 101, 121, 131, 141, 151, 161, 171, 181, 191, 201, 221, 231, 241, 251, 261, 271, 281, 291, …`
- everything else: `2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 22, 23, 24, 25, 26, 27, 28, 29, 32, 33, 34, 35, 36, 37, 38, 39, 42, 43, 44, 45, 46, 47, 48, 49, 52, 53, …`

### Plural rule #4 (4 forms): Celtic (Scottish Gaelic)

**Families**: _Celtic (Scottish Gaelic)_

- is 1 or 11: `1, 11`
- is 2 or 12: `2, 12`
- is 3-10 or 13-19: `3, 4, 5, 6, 7, 8, 9, 10, 13, 14, 15, 16, 17, 18, 19`
- everything else: `0, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, …`

### Plural rule #5 (3 forms): Romanic (Romanian)

**Families**: _Romanic (Romanian)_

- is 1: `1`
- is 0 or ends in 01-19, excluding 1: `0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, …`
- everything else: `20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, …`

### Plural rule #6 (3 forms): Baltic (Lithuanian)

**Families**: _Baltic (Lithuanian)_

- ends in 1, excluding 11: `1, 21, 31, 41, 51, 61, 71, 81, 91, 101, 121, 131, 141, 151, 161, 171, 181, 191, 201, 221, 231, 241, 251, 261, 271, 281, 291, …`
- ends in 0 or ends in 11-19: `0, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, …`
- everything else: `2, 3, 4, 5, 6, 7, 8, 9, 22, 23, 24, 25, 26, 27, 28, 29, 32, 33, 34, 35, 36, 37, 38, 39, 42, 43, 44, 45, 46, 47, 48, 49, 52, 53, 54, 55, 56, 57, 58, 59, 62, 63, 64, 65, 66, 67, 68, 69, 72, 73, …`

### Plural rule #7 (3 forms): Belarusian, Russian, Ukrainian

**Families**: _Belarusian, Russian, Ukrainian_

- ends in 1, excluding 11: `1, 21, 31, 41, 51, 61, 71, 81, 91, 101, 121, 131, 141, 151, 161, 171, 181, 191, 201, 221, 231, 241, 251, 261, 271, 281, 291, …`
- ends in 2-4, excluding 12-14: `2, 3, 4, 22, 23, 24, 32, 33, 34, 42, 43, 44, 52, 53, 54, 62, 63, 64, 72, 73, 74, 82, 83, 84, 92, 93, 94, 102, 103, 104, 122, 123, 124, 132, 133, 134, 142, 143, 144, 152, 153, 154, 162, 163, 164, 172, 173, 174, 182, 183, …`
- everything else: `0, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25, 26, 27, 28, 29, 30, 35, 36, 37, 38, 39, 40, 45, 46, 47, 48, 49, 50, 55, 56, 57, 58, 59, 60, 65, 66, 67, 68, 69, 70, 75, 76, 77, …, 112, 113, ..., 212, 213, ...`

### Plural rule #8 (3 forms): Slavic (Slovak, Czech)

**Families**: _Slavic (Slovak, Czech)_

- is 1: `1`
- is 2-4: `2, 3, 4`
- everything else: `0, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, …`

### Plural rule #9 (3 forms): Slavic (Polish)

**Families**: _Slavic (Polish)_

- is 1: `1`
- ends in 2-4, excluding 12-14: `2, 3, 4, 22, 23, 24, 32, 33, 34, 42, 43, 44, 52, 53, 54, 62, 63, 64, 72, 73, 74, 82, 83, 84, 92, 93, 94, 102, 103, 104, 122, 123, 124, 132, 133, 134, 142, 143, 144, 152, 153, 154, 162, 163, 164, 172, 173, 174, 182, 183, …`
- everything else: `0, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 25, 26, 27, 28, 29, 30, 31, 35, 36, 37, 38, 39, 40, 41, 45, 46, 47, 48, 49, 50, 51, 55, 56, 57, 58, 59, 60, 61, 65, 66, 67, 68, …`

### Plural rule #10 (4 forms): Slavic (Slovenian, Sorbian)

**Families**: _Slavic (Slovenian, Sorbian)_

- ends in 01: `1, 101, 201, …`
- ends in 02: `2, 102, 202, …`
- ends in 03-04: `3, 4, 103, 104, 203, 204, …`
- everything else:` 0, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, …`

### Plural rule #11 (5 forms): Celtic (Irish Gaelic)

**Families**: _Celtic (Irish Gaelic)_

- is 1: `1`
- is 2: `2`
- is 3-6: `3, 4, 5, 6`
- is 7-10: `7, 8, 9, 10`
- everything else: `0, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, …`

### Plural rule #12 (6 forms): Semitic (Arabic)

**Families**: _Semitic (Arabic)_

- is 1: `1`
- is 2: `2`
- ends in 03-10: `3, 4, 5, 6, 7, 8, 9, 10, 103, 104, 105, 106, 107, 108, 109, 110, 203, 204, 205, 206, 207, 208, 209, 210, …`
- everything else but is 0 and ends in 00-02, excluding 0-2: `11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, …`
- ends in 00-02, excluding 0-2: `100, 101, 102, 200, 201, 202, …`
  is 0: `0`

### Plural rule #13 (4 forms): Semitic (Maltese)

**Families**: _Semitic (Maltese)_

- is 1: `1`
- is 0 or ends in 01-10, excluding 1: `0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, …`
- ends in 11-19: `11, 12, 13, 14, 15, 16, 17, 18, 19, 111, 112, 113, 114, 115, 116, 117, 118, 119, 211, 212, 213, 214, 215, 216, 217, 218, 219, …`
- everything else: `20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, …`

### Plural rule #14 (3 forms): unused

**Families**: _unused_

- ends in 1: `1, 11, 21, 31, 41, 51, 61, 71, 81, 91, 101, 111, 121, 131, 141, 151, 161, 171, 181, 191, 201, 211, 221, 231, 241, 251, 261, 271, 281, 291, …`
- ends in 2: `2, 12, 22, 32, 42, 52, 62, 72, 82, 92, 102, 112, 122, 132, 142, 152, 162, 172, 182, 192, 202, 212, 222, 232, 242, 252, 262, 272, 282, 292, …`
- everything else: `0, 3, 4, 5, 6, 7, 8, 9, 10, 13, 14, 15, 16, 17, 18, 19, 20, 23, 24, 25, 26, 27, 28, 29, 30, 33, 34, 35, 36, 37, 38, 39, 40, 43, 44, 45, 46, 47, 48, 49, 50, 53, 54, 55, 56, 57, 58, 59, 60, 63, …`

### Plural rule #15 (2 forms): Icelandic, Macedonian

**Families**: _Icelandic, Macedonian_

- ends in 1, excluding 11: `1, 21, 31, 41, 51, 61, 71, 81, 91, 101, 121, 131, 141, 151, 161, 171, 181, 191, 201, 221, 231, 241, 251, 261, 271, 281, 291, …`
- everything else: `0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22, 23, 24, 25, 26, 27, 28, 29, 30, 32, 33, 34, 35, 36, 37, 38, 39, 40, 42, 43, 44, 45, 46, 47, 48, 49, 50, 52, 53, 54, …`

### Plural rule #16 (5 forms): Celtic (Breton)

**Families**: _Celtic (Breton)_

- ends in 1, excluding 11, 71, 91: `21, 31, 41, 51, 61, 81, 101, 121, 131, 141, 151, 161, 181, 201, 221, 231, 241, 251, 261, 281, ...`
- ends in 2, excluding 12, 72, 92: `2, 22, 32, 42, 52, 62, 82, 102, 122, 132, 142, 152, 162, 182, 202, 222, 232, 242, 252, 262, 282, ...`
- ends in 3, 4 or 9 excluding 13, 14, 19, 73, 74, 79, 93, 94, 99: `3, 4, 9, 23, 24, 29, 33, 34, 39, 43, 44, 49, 53, 54, 59, ...`
- ends in 000000: `1000000, 2000000, 3000000, 4000000, 5000000, 6000000, 7000000, 8000000, 9000000, 10000000, ...`
- everything else: `0, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25, 26, 27, 28, 30, 35, 36, 37, 38, 40, ...`

### Plural rule #17 (2 forms): Ecuador indigenous languages (Shuar)

**Families**: _Ecuador indigenous languages (Shuar)_

- is 0: `0`
- everything else: `1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, …`

### Plural rule #18 (6 forms): Welsh

**Families**: _Welsh_

- is 0: `0`
- is 1: `1`
- is 2: `2`
- is 3: `3`
- is 6: `6`
- everything else: `4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, …`

### Plural rule #19 (3 forms): Slavic (Bosnian, Croatian, Serbian)

**Families**: _Slavic (Bosnian, Croatian, Serbian)_

- ends in 1, excluding 11: `1, 21, 31, 41, 51, 61, 71, 81, 91, 101, 121, 131, 141, 151, 161, 171, 181, 191, 201, 221, 231, 241, 251, 261, 271, 281, 291, …`
- ends in 2-4, excluding 12-14: `2, 3, 4, 22, 23, 24, 32, 33, 34, 42, 43, 44, 52, 53, 54, 62, 63, 64, 72, 73, 74, 82, 83, 84, 92, 93, 94, 102, 103, 104, 122, 123, 124, 132, 133, 134, 142, 143, 144, 152, 153, 154, 162, 163, 164, 172, 173, 174, 182, 183, …`
- everything else: `0, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25, 26, 27, 28, 29, 30, 35, 36, 37, 38, 39, 40, 45, 46, 47, 48, 49, 50, 55, 56, 57, 58, 59, 60, 65, 66, 67, 68, 69, 70, 75, 76, 77, …, 112, 113, ..., 212, 213, ...`
