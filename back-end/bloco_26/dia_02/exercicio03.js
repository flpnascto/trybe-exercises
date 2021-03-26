const lib = require('./exercicio01')

function generateNumbers() {
  return Math.floor(Math.random() * 1)
}

async function resolveOperation() {
  const numA = generateNumbers();
  const numB = generateNumbers();
  const numC = generateNumbers();

  try {
    const result = await lib.operation(numA, numB, numC);
    console.log(result);
  } catch (error) {
    console.error(error)
  }




}

resolveOperation();


