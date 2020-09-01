function somatorioInteiro(inteiro) {
  soma = 0;
  for (let i = 1 ; i <= inteiro ; i += 1){
    soma += i;
  }
  return soma;
}

console.log(somatorioInteiro(5));