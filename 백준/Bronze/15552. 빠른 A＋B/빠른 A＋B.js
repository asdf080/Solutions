let input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n")
let leng = +input[0]
let answer = '';

for(let i =1;i<=leng;i++){
  let arr = input[i].split(' ').map(Number)
  answer += arr[0]+arr[1]+"\n"
}

console.log(answer)