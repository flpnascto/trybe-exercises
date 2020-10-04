let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim",
};

let outro = {
  personagem: "Tio patinhas",
  origem: "hristmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim"
}

for (chave in info) {
  if (chave == "recorrente") {
    if (info[chave] == "Sim" && info[chave] == "Sim") {
      console.log("Ambos recorrentes");
    }
  } else {
    console.log(`${info[chave]} e ${outro[chave]}`);
  }
}
