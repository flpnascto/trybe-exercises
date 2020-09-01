let arrayTeste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorNome(nomes) {
  let numCaracteres = 0;
  indice = 0;
  for (let i in nomes) {
    if (nomes[i].length > numCaracteres) {
      numCaracteres = nomes[i].length;
      indice = i;
    }
  }
  return nomes[indice];
}

console.log(maiorNome(arrayTeste));