let n = 13;

if (n % 2 === 0){
  console.log("O valor da base deve ser ímpar!")
} else {
  for (let i = 0 ; i < n - 1 ; i += 2){
    let  msgA = "", msgB = "";
    let k = Math.trunc((n-i)/2);
    for (let z = 0 ; z < k ; z += 1){
      msgA += " ";
      }
    for(let j = 1 ; j < i ; j += 1){
      if(i > 0 && i < n) {
        msgB += " ";
      } 
    }
    if (i > 1) {
      msgB +="*";
    }
    console.log(msgA + "*" + msgB)
  }
  
  msgA = "";
  for(let i = 1 ; i <= n ; i += 1){
    msgA += "*";
  }
  console.log(msgA)
}

