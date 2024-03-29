const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// implemente seus testes aqui

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4])
assert.deepStrictEqual(myRemove(['a', 'b', 'c', 'd'], 'c'), ['a', 'b', 'd'])
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4])