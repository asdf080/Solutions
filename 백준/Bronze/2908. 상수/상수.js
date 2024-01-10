const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split(' ')
for(let i=0;i<input.length;i++){
  input[i] = input[i].split('').reverse().join('')
}
console.log(Math.max(...input.map(Number)))