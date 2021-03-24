function operation(numA, numB, numC) {
  return new Promise((resolve, reject) => {
    if (
      typeof numA !== 'number'
      || typeof numB !== 'number'
      || typeof numC !== 'number'
    ) return reject('Digite apenas números');

    resolve(numA + numB);
  })
    .then((sum) => {
      result = sum * numC
      if (result < 50)
        return Promise.reject('Valor muito baixo');

      return result;
    })
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