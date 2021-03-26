async function operation(numA, numB, numC) {
  if (
    typeof numA !== 'number'
    || typeof numB !== 'number'
    || typeof numC !== 'number'
  ) return Promise.reject('Digite apenas números');

  result = (numA + numB) * numC;

  if (result < 50)
    return Promise.reject('Valor muito baixo');

  return result;

}

operation(5, 3, 10)
  .then(result => console.log(`Resultado ${result}`))
  .catch(err => console.log(`error: ${err}`))

operation(5, 3, 2)
  .then(result => console.log(`Resultado ${result}`))
  .catch(err => console.log(`error: ${err}`))

operation(10, '40', 10)
  .then(result => console.log(`Resultado ${result}`))
  .catch(err => console.log(`error: ${err}`))

operation("abc", 40, 10)
  .then(result => console.log(`Resultado ${result}`))
  .catch(err => console.log(`error: ${err}`))