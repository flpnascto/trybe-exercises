let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorValor = 0;

for (i in numbers){
  if (numbers[i] > maiorValor){
    maiorValor = numbers[i];
  }
}
console.log(maiorValor);