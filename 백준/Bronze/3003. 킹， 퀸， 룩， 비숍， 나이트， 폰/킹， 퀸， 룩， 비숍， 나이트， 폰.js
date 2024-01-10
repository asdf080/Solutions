const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split(' ').map(Number)
let pi = [1,1,2,2,2,8]
console.log(input.map((v,i) => pi[i]-v).join(' '))