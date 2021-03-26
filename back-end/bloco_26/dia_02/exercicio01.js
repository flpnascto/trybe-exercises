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
//module.exports = { add };
module.exports = { operation };

/*
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
*/
