const number = 4;

function fatorial(valor) {
  let resultado = 1;
  if (valor > 1) {
    for (let i = 1; i <= valor; i += 1) {
      resultado *= i;
    }
  }  
  return resultado;
}

console.log(`Função padrão: ${fatorial(number)}`);

// Utilizando Arrow Function
const fatorialArrow = (valor) => valor > 1 ? valor * fatorialArrow(valor-1) : 1;

console.log(`Função arrow: ${fatorialArrow(number)}`);
