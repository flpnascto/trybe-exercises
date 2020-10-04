let valorCusto = 10, valorVenda = 20, imposto = 0.2;
let lucro, taxa, valorCustoTotal;

if(valorCusto < 0 || valorVenda < 0){
  console.log("Valores inválidos!")
} else {
  taxa = valorCusto * imposto;
  valorCustoTotal = valorCusto + taxa;
  lucro = (valorVenda - valorCustoTotal) * 1000;
}
console.log(lucro)