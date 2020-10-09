const assert = require('assert');

const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

function containsA() {
  return names.reduce((sumOfAs, currentName) => {
    sumOfAs += currentName
      .toLowerCase()
      .split('')
      .filter((char) => char === 'a').length;
    return sumOfAs;
  }, 0);
}

// console.log(containsA());
assert.deepStrictEqual(containsA(), 20);
