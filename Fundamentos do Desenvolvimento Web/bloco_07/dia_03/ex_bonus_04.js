const getLargestNumber = (array) => {
  let largestNumber;
  for (let i = 0; i < array.length - 1; i += 1) {
      if (array[i] > array[i + 1]) {
          largestNumber = array[i];
      }
  }
  return largestNumber;
}

const parameter = [45, 8, 2, 50, 1, 7, 99];
const result = 99;

const assert = require('assert');

// o teste padrão assert.deepStrictEqual(getLargestNumber(parameter), result);
// retornou [50]. Assim vamos testar menos elementos da array
assert.deepStrictEqual(getLargestNumber(parameter.splice(3,3)), 50);
// o retorno da função é [50] e não 50;
// alterando a linha "largestNumber = [array[i]];" para "largestNumber = array[i];"
// assim retorna um 'number' ao invés de 'array'

// com o teste bem sucedido, vamos testar a outra metade do  array
assert.deepStrictEqual(getLargestNumber([50, 1, 7, 99]), 99)

// assert.deepStrictEqual(getLargestNumber(parameter), result);
