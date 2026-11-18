import Codes from './codes';

/** @type LanguageCode[] */
const all = [...Object.values(Codes)];
const ALL = [...all] as const;
const CODES_COUNT = ALL.length;

type LanguageCode = (typeof ALL)[number];

/**
 * Checks whether a value is a known language code.
 *
 * @param code - Value to validate.
 * @returns `true` when the value is one of the supported language codes.
 */
const isLanguageCode = (code: any, caseSensitive: boolean = false): boolean => {
  if (caseSensitive) return ALL.includes(code);
  return ALL.some((v) => v.toLowerCase() === code.toLowerCase());
};

export type { LanguageCode };

export default {
  ...Codes,
  all,
  ALL,
  CODES_COUNT,
  isLanguageCode,
};
