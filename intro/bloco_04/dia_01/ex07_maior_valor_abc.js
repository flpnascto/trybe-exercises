let valorA, valorB, valorC;

let msg = "O maior valor é ";

valorA = 8;
valorB = 7;
valorC = 6;


if ((valorA > valorB) && (valorA > valorC)) {
  console.log(msg + valorA);
} else if ((valorB > valorA) && (valorB > valorC)) {
  console.log(msg + valorB);
} else {
  console.log(msg + valorC);
}