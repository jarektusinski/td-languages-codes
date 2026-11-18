import Codes from '.';
import Names from './codes';

const { all, ALL, POLISH, isLanguageCode } = Codes;

const CODES_COUNT = 232;

const getSortedCodesByVariableName = (): string[] =>
  Object.entries(Names)
    .sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
    .map(([, value]) => value);

it('should contain all codes', () => {
  expect(ALL).toHaveLength(CODES_COUNT);
  expect(new Set(ALL).size).toBe(CODES_COUNT);
});

it('should be sorted', () => {
  expect(ALL).toEqual(all);
  expect(ALL).toEqual(getSortedCodesByVariableName());
});

describe('Value validation: ', () => {
  it.each([POLISH, 'pl'])('should pass for %s', code => {
    expect(isLanguageCode(code)).toBe(true);
  });

  describe('should not pass ', () => {
    it.each(['some bad string', 'xc', 'pol'])('for %s', code => {
      expect(isLanguageCode(code)).toBe(false);
    });

    it.each(['some bad string', 'xc', 'PL', 'Pl', 'pL', 'pol'])('when case sensitive for %s', code => {
      expect(isLanguageCode(code, true)).toBe(false);
    });
  });
});
