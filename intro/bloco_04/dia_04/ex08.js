let arrayTeste = [2, 4, 6, 7, 10, 0, -3];

function indiceMenorValor(valores) {
  let indice = "";
  let maiorValor = ""
  for (let i in valores) {
    if (valores[i] < maiorValor) {
      maiorValor = valores[i];
      indice = i
    }
  }
  return indice
}

console.log(indiceMenorValor(arrayTeste));