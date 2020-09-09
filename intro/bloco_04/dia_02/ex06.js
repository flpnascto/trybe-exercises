let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let quantidadeImpar = 0;

for (i in numbers){
  if (numbers[i] % 2 != 0){
    quantidadeImpar += 1;
  }
}

if (quantidadeImpar > 0){
  console.log(quantidadeImpar);
} else {
  console.log("nenhum valor ímpar encontrado");
}