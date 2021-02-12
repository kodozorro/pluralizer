# @kodozorro/pluralizer

![npm](https://img.shields.io/npm/v/pluralizer)
![npm bundle size](https://img.shields.io/bundlephobia/min/pluralizer)

Choose right plural form for different languages. Was made for Reac native purpose on TypeScript.

## Install

```
$ npm install @kodozorro/pluralizer
```

## Usage

Function pluralizer() takes two arguments:

Array of words you need to be pluralized

```ts
["Bird", "Birds"];
```

A number which you want to use with this word

```ts
5;
```

The final function looks like this:

```ts
import pluralizer from "@kodozorro/pluralizer";

pluralizer(["Bird", "Birds"], 5);
//=> "Birds"
```

if you want to return string with a number than add third boolean argument true:

```ts
import pluralizer from "@kodozorro/pluralizer";

pluralizer(["Bird", "Birds"], 5, true);
//=> "5 Birds"
```
