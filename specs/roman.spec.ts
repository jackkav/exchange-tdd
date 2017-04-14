import { roman2decimal, decimal2roman } from '../src/roman'
const exampleNumberals = {
  I: 1,
  V: 5,
  MMMCCXC: 3290,
  MCMVII: 1907,
  MMCDXLVII: 2447,
  MMCMLXXXIV: 2984,
  MXCVI: 1096,
  MCMIV: 1904,
  MMDII: 2502,
  M: 1000,
  MMDLXXIX: 2579,
  MMMLXXXVIII: 3088,
  MMDCCXCIX: 2799,
  MMDVI: 2506,
  MMMDCCLVII: 3757,
  MMMCCLXXXIII: 3283,
  MCDXL: 1440,
  MMD: 2500,
  DCLI: 651,
}

test('roman numerals match arabic numbers', () => {
  Object.keys(exampleNumberals).forEach(element => {
    expect(roman2decimal(element)).toEqual(exampleNumberals[element]);
  });
});

test('arabic numbers match roman numerals', () => {
  Object.keys(exampleNumberals).forEach(element => {
    expect(decimal2roman(exampleNumberals[element])).toEqual(element);
  });
});
