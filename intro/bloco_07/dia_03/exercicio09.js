const assert = require('assert');
// escreva a função findTheNeedle aqui
function findTheNeedle(words, wordNeedle) {
  for (let index = 0; index < words.length; index++) {
    if (words[index] === wordNeedle) {
      return index;
    }
  }
  return -1;
}

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);