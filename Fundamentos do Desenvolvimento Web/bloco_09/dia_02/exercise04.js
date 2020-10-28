const fetchNumbersPromise = () => {
  return new Promise((resolve, reject) => {
    const numbersArray = Array.from(
      { length: 10},
      () => Math.pow((Math.floor(Math.random() * 50) + 1), 2)
    );
 
    const sumArray = numbersArray.reduce(((sum, number) => sum + number), 0);

    (sumArray <= 8000) ?
      resolve(sumArray) :
      reject('É mais de oito mil! Essa promise deve estar quebrada!');
    
  })
  .then((divNumber) => {
    const dividendArray = [2, 3, 5, 10].map((number) => divNumber / number);
    console.log(dividendArray)
  })
  .catch((msg) => console.log(msg));

}
fetchNumbersPromise()
