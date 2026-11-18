# [TusinskiDev] Languages Abbreviations

A TypeScript/JavaScript library providing 232 standardized language codes for internationalization and localization projects.

## Features

- ✅ **232 language codes** — list of languages codes: `ALL` (readonly), `all`
- ✅ **TypeScript support** — typed constants and a `LanguageCode` union type
- ✅ **Code validation** — check values with `isLanguageCode` and optional case-sensitive matching
- ✅ **Zero dependencies** — lightweight and tree-shakeable
- ✅ **CommonJS and ESM** — ready for modern Node.js and bundlers

## Installation

```bash
npm install td-languages-codes
```

```bash
yarn add td-languages-codes
```

## Usage

```typescript
import Languages from 'td-languages-codes';

console.log(Languages.ENGLISH); // 'en'
console.log(Languages.POLISH); // 'pl'
console.log(Languages.GERMAN); // 'de'

console.log(Languages.CODES_COUNT); // 232
console.log(Languages.ALL); // readonly array of all codes
console.log(Languages.all); // mutable copy of all codes
```

### Validation

`isLanguageCode` is case-insensitive by default:

```typescript
Languages.isLanguageCode('en'); // true
Languages.isLanguageCode('EN'); // true
Languages.isLanguageCode('invalid'); // false

Languages.isLanguageCode('EN', true); // false
Languages.isLanguageCode('en', true); // true
```

### TypeScript

```typescript
import Languages from 'td-languages-codes';
import type { LanguageCode } from 'td-languages-codes';

function setLanguage(language: LanguageCode) {
  console.log(`Setting language to: ${language}`);
}

setLanguage(Languages.ENGLISH); // ✅ Valid
setLanguage('xx'); // ❌ TypeScript error
```

### Lists and selectors

```typescript
import Languages from 'td-languages-codes';

const options = Languages.ALL.map(code => ({
  value: code,
  label: code,
}));

console.log(options);
```

## API

### Constants

All language codes are available as named properties on the default export:

```typescript
Languages.AFRIKAANS // 'af'
Languages.ARABIC // 'ar'
Languages.CHINESE // 'zh'
Languages.ENGLISH // 'en'
Languages.FRENCH // 'fr'
Languages.GERMAN // 'de'
Languages.POLISH // 'pl'
Languages.SPANISH // 'es'
```

For the complete list, inspect `Languages.ALL` or `Languages.all`.

### `Languages.ALL`

A readonly tuple containing all 232 codes:

```typescript
const code = Languages.ALL[0];
console.log(Languages.ALL.length); // 232
```

### `Languages.all`

An array copy of all codes:

```typescript
const supported: LanguageCode[] = Languages.all;
```

### `Languages.CODES_COUNT`

The number of available language codes:

```typescript
console.log(Languages.CODES_COUNT); // 232
```

### `Languages.isLanguageCode(code, caseSensitive?)`

Checks whether a value is one of the supported language codes.

- `code: unknown` — value to validate
- `caseSensitive: boolean` — optional, defaults to `false`
- Returns `boolean`

```typescript
Languages.isLanguageCode('PL'); // true
Languages.isLanguageCode('PL', true); // false
```

### `LanguageCode`

The TypeScript union type derived from `Languages.ALL`:

```typescript
import type { LanguageCode } from 'td-languages-codes';

interface UserPreferences {
  language: LanguageCode;
  fallbackLanguage: LanguageCode;
}
```

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

## Author

**Jarosław Tusiński**
