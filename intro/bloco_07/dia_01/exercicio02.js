function longestWord(frase) {
  const frases = frase.split(' ');
  let wordLength = 0;
  // largerWord = '';
  for (word in frases) {
    if (frases[word].length > wordLength) {
      largerWord = frases[word];
    }
  }
  return largerWord;
}


console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")); // retorna 'aconteceu'

