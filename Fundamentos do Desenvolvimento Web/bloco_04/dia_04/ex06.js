
let palavras = ["arara" , "desenvolvimento"];

function verificaPalindrome(palavra) {
  let palavraReverso = palavra.split('').reverse().join('');
  return palavra == palavraReverso;
}

for (let i in palavras) {
  console.log(verificaPalindrome(palavras[i]));
}
