let n = 5;

for (let i = 0 ; i < n ; i += 2){
  let  msgA = "", msgB = "";
  let k = Math.trunc((n-i)/2);
  for (let z = 0 ; z < k ; z += 1){
    msgA += " ";
    }
  for(let j = 0 ; j <= i ; j += 1){
    msgB += "*";
  }
  
  console.log(msgA + msgB + msgA)
}