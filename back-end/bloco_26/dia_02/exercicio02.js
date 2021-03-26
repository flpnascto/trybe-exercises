const lib = require('./exercicio01')

function generateNumbers() {
  return Math.floor(Math.random() * 100)
}

const numA = generateNumbers();
const numB = generateNumbers();
const numC = generateNumbers();

lib.operation(numA, numB, numC)
  .then(resolve => console.log(resolve))
  .catch(e => console.error(`Aconteceu o erro: ${e}`))
