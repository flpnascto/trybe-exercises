let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menorValor = numbers[0];

for (i = 1; i < numbers.length; i += 1){
  if(numbers[i] < menorValor){
    menorValor = numbers[i];
  }
}
console.log(menorValor);