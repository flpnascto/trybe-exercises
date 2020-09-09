let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let media, soma = 0

for (i in numbers){
  soma += numbers[i];
}
media = soma / numbers.length;

console.log(media);