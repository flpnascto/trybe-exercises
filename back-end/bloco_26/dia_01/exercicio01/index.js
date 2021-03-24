const readlineSync = require('readline-sync');

function calculaImc() {

  const altura = readlineSync.questionFloat("Digite a altura:").toFixed(2);
  const peso = readlineSync.questionFloat("Digite o peso:").toFixed(2);

  let imc = (peso / (altura * altura)).toFixed(2);

  console.log(`IMC = ${imc}`);
}

calculaImc();
