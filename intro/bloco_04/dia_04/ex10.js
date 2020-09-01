let arrayTeste = [2, 3, 2, 5, 8, 2, 3];

function maiorRepeticao(valores) {
  let valor = "";
  let repeticao = 0;
  for (let i in valores) {
    let repeticaoAux = 0;
    for (let j in valores) {
      if (valores[i] == valores[j]) {
        repeticaoAux += 1;        
      }
    }
    if (repeticaoAux > repeticao){
      repeticao = repeticaoAux;
      valor = valores[i]; 
    }
    
  }
  return valor
}

console.log(maiorRepeticao(arrayTeste));