const assert = require('assert');
// escreva a função removeMiddle aqui

function removeMiddle(words) {
  let middle = [];
  let position = parseInt(words.length / 2);
  middle.push(words[position]);
  words.splice(position, 1);
  return middle;
}

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(words, expectedWords);

