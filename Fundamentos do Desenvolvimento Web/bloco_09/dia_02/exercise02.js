const fetchNumbersPromise = () => {
  return new Promise((resolve, reject) => {
    const numbersArray = Array.from(
      { length: 10},
      () => Math.pow((Math.floor(Math.random() * 50) + 1), 2)
    );
 
    const sumArray = numbersArray.reduce(((sum, number) => sum + number), 0);

    (sumArray <= 8000) ?
      resolve(console.log('resolve')) :
      reject(console.log('reject'));
    
  })
  .then(() => console.log('then'))
  .catch(() => console.log('then'));

}
fetchNumbersPromise()