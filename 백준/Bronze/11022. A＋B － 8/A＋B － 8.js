const input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
for(let i=1;i<=+input[0];i++){
  let arr = input[i].split(' ').map(Number)
  console.log(`Case #${i}: ${arr[0]} + ${arr[1]} = ${arr[0]+arr[1]}`)
}