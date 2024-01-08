let input = require("fs").readFileSync("/dev/stdin", "utf8")
let answer = ''
for(let i=0;i<input/4;i++){
  answer += 'long '
}
console.log(answer + "int")