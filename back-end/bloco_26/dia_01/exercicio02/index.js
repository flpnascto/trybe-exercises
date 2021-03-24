const readlineSync = require('readline-sync');

function detalheImc(imc) {
  let msg = "";
  if (imc < 18.5) msg = "Abaixo do peso (magreza)";
  if (imc >= 18.5 && imc <= 24.9) msg = "Peso normal";
  if (imc >= 25.0 && imc <= 29.9) msg = "Acima do peso (sobrepeso)";
  if (imc >= 30.0 && imc <= 34.9) msg = "Obesidade grau I";
  if (imc >= 35.0 && imc <= 39.9) msg = "Obesidade grau II";
  if (imc >= 40.0) msg = "Obesidade graus III e IV";
  return msg;
}


function calculaImc() {

  const altura = readlineSync.questionFloat("Digite a altura:").toFixed(2);
  const peso = readlineSync.questionFloat("Digite o peso:").toFixed(2);

  let imc = (peso / (altura * altura)).toFixed(2);

  console.log(`IMC = ${imc}`);
  console.log(detalheImc(imc));
}

calculaImc();
