function verificaFimPalavra(palavraUm, palavraDois) {
  let stringWord = "";
  let stringEnding = "";
  let contagem = 0;
  if (palavraUm.length >= palavraDois.length){
    stringWord = palavraUm;
    stringEnding = palavraDois;
  } else {
    stringWord = palavraDois.split("");
    stringEnding = palavraUm.split('');
  }
  for (let i = 1 ; i <= stringEnding.length ; i += 1){
    if (palavraUm[palavraUm.length - i] != palavraDois[palavraDois.length - i]) {
      contagem += 1;
    }

  }
  return (contagem == 0);
}

console.log(verificaFimPalavra("trybe", "be"));
console.log(verificaFimPalavra("joaofernando", "fernan"));