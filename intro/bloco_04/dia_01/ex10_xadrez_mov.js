let peca;

peca = "chiii";

if (typeof peca === "string") {
  switch (peca.toLowerCase()) {
    case "rei":
      console.log(peca, "-> todas, uma casa");
      break;
    case "rainha":
      console.log(peca, "-> todas.");
        break;
    case "bispo":
      console.log(peca, "-> diagonal");
      break;
    case "cavalo":
      console.log(peca, "-> em L");
      break;
    case "torre":
      console.log(peca, "-> vertica ou horizontal");
        break;
    case "peao":
      console.log(peca, "-> para frente, uma casa");
      break;
    default:
      console.log(peca, "-> não é uma peça válida!")
      break;
  }
} else {
  console.log(peca, "não é uma String!")
}

