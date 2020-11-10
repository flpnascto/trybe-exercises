const { expect } = require('@jest/globals');
const sum = require('./exercise01');

test('sums two valeus', () => {
  expect(sum(4, 5)).toBe(9);
  expect(sum(0, 0)).toBe(0);
  expect(() => {
    sum(4, '5');
  }).toThrow();
}); 