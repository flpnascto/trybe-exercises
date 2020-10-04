let contador = 0, numero = 23;

for (let i = 1; i <= numero ; i += 1){
  if (numero % i == 0){
    contador += 1; 
  }
}
if( contador <= 2 ){
  console.log(`O número ${numero} é primo !`)
} else{
  console.log(`O número ${numero} não é primo !`)

}