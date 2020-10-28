const myRemoveWithoutCopy = require('./exercise03');

test('remove items from array whithout copy', () => {
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  expect(myRemoveWithoutCopy(['a', 'b', 'c', 'd'], 'c')).toEqual(['a', 'b', 'd']);
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
});
