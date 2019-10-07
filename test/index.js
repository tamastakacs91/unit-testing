const assert = require('chai').assert;
const index = require('../index.js');
/* const {
addNumbers,
subtractNumber,
stringifier,
stringifyAndLowerCase,
removeObjectKeys,
removeQuotationsColonsAndCurlyBraces,
isFoundInStringifiedArray,
filterInStringifiedArray
} = require('../index.js'); */

describe('index.js', () => {
  it('Adding two numbers works.', () => {
    const result = index.addNumbers(3, 4);
    assert.equal(result, 7);
  });

  it('Adding two numbers results in number.', () => {
    const result = index.addNumbers(3, 4);
    assert.typeOf(result, 'number');
  });

  it('Subtracting two numbers works.', () => {
    const result = index.subtractNumber(10, 4);
    assert.equal(result, 6);
  });

  /* Testing the stringifier method */

  it('Stringifying a number parameter works.', () => {
    const result = index.stringifier(8);
    assert.isString(result, true);
  });

  it('Stringifying an array parameter works.', () => {
    const result = index.stringifier([
      { name: 'Tomi', age: 27, job: 'student' },
      { name: 'Viki', age: 28, job: 'counselor' },
    ]);
    assert.typeOf(result, 'string');
  });

  /* Testing the stringifyAndLowerCase method */

  it('Stringifying and lower casing array parameter works.', () => {
    const result = index.stringifyAndLowerCase(['TOMI', 'VIKI']);
    assert.equal(result, '["tomi","viki"]');
  });

  /* Testing the removeObjectKeys method */

  it('Removing object keys works.', () => {
    const result = index.removeObjectKeys([
      { name: 'Tomi', age: 28 },
      { name: 'Viki', age: 28 },
    ]);
    assert.equal(result, '[{"tomi",28},{"viki",28}]');
  });

  /* Testing the removeQuotationsColonsAndCurlyBraces method */

  it('Removing quotation marks, colons and curly braces works.', () => {
    const result = index.removeQuotationsColonsAndCurlyBraces([
      { name: 'Tomi', age: 28 },
      { name: 'Viki', age: 28 },
    ]);
    assert.equal(result, '[tomi28viki28]');
  });

  /* Testing isFoundInStringifiedArray method */

  it('True is returned if seach phrase is found in the array.', () => {
    const result = index.isFoundInStringifiedArray([
      { name: 'Tomi', age: 28 },
      { name: 'Viki', age: 28 },
    ], 'Vi');
    assert.strictEqual(result, true);
  });

  /* Testing the filter method */

  /* it('should return one person if only one contains the search param', () => {
    // given
    const peopleArray = [
      { name: 'Tomi', age: 28 },
      { name: 'Viki', age: 28 },
    ];
    const searchParam = 'Vi';

    // when
    const result = index.filterInStringifiedArray(peopleArray, searchParam);

    // then
    assert.isArray(result, true);
  }); */

  /* Test fails. Comparing objects?? */

  it('should return one person if only one contains the search param', () => {
    // given
    const Viki = { name: 'Viki', age: 28 };
    const peopleArray = [
      { name: 'Tomi', age: 28 },
      Viki,
    ];
    const searchParam = 'Vi';

    // when
    const result = index.filterInStringifiedArray(peopleArray, searchParam);

    // then
    assert.isArray(result, true);
    assert.deepEqual(result, [Viki]);
  });
});
