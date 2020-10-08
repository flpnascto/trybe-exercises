    
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


const reducer = (accumulator, currentValue) => {
  accumulator.push(currentValue);
  return accumulator;
}

function flatten() {
  let response = []
  arrays.forEach((array) => array.reduce(reducer, response))
  return response
}

assert.deepStrictEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);
