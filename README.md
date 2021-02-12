# @kodozorro/pluralizer

![npm](https://img.shields.io/npm/v/pluralizer)
![npm bundle size](https://img.shields.io/bundlephobia/min/pluralizer)

Chooses right plural form for different languages. Was made for React native purpose with TypeScript.

## Install

This package uses `react-native-localize` to get current phone locale, works on Android and IPhones. So, please install it too.

```
$ npm install @kodozorro/pluralizer
$ npm install react-native-localize
```

## Usage

```ts
import pluralizer from "@kodozorro/pluralizer";

pluralizer(["Bird", "Birds"], 5, true);
//=> "5 Birds"

pluralizer(["Bird", "Birds"], 5, true, true);
//=> "Birds 5"

pluralizer(["Bird", "Birds"], 5);
//=> "Birds"
```

These tool works with prepared words, it **doesn't generate anything!!**

### Prepare your plural forms

You must provide your array of words, whih can be used. Translation of it is your responsibility.

**You must know the plural rule of your language!!!** But, I'll show them further.

For example, if it is word `Bird` that you want to pluralize, than you must have an array like this:

```ts
["Bird", "Birds"];
```

Due to two plural forms in English.

If it is slavic languages, than array of three words (Russian example):

```ts
["Синица", "Синицы", "Синиц"];
```

Due to three plural forms in these languages.

###Function `pluralizer()` takes three arguments:

Array of words you need to be pluralized

```ts
["Bird", "Birds"];
```

A number which you want to use with this word

```ts
5;
```

if you want to return string with a number than add third boolean argument true.
