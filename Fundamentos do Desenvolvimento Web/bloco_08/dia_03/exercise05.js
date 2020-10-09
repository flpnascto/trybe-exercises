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

// function containsA() {
//   return names.reduce((sumOfAs, currentName) => {
//     console.log('Sum ' + sumOfAs + ' Name: ' + currentName)
//     currentName.split('').forEach((element) => {
//       console.log(element);
//       if (element === 'a' || element === 'A') {
//         sumOfAs += 1;
//         console.log(sumOfAs);
//       }
//       console.log(sumOfAs);
//       return sumOfAs;
//     });
//   }, 0);
// }
// function containsA() {
//   const teste = names.reduce((sumOfAs, currentName) => {
//     console.log(currentName);
//     let x = currentName.toLowerCase().split('')
//     console.log(x)
//     let y = x.filter((char) => char === 'a');
//     console.log(y)
//     // sumOfAs += x.length;
//   });
//   return teste;
// }

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
