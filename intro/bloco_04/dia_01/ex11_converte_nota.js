let nota;

nota = 49;

if ((nota > 100) || (nota < 0)) {
  console.log("Valor inválido");
} else if (nota >= 90){
  console.log("Porcentagem >= 90 -> A");
} else if (nota >= 80){
  console.log("Porcentagem >= 80 -> B");
} else if (nota >= 70){
  console.log("Porcentagem >= 70 -> C");
} else if (nota >= 60){
  console.log("Porcentagem >= 60 -> D");
} else if (nota >= 50){
  console.log("Porcentagem >= 50 -> F");
} else {
  console.log("Porcentagem < 50 -> F");
}