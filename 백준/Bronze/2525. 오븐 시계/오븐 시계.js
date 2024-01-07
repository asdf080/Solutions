const input = require("fs").readFileSync("/dev/stdin", "utf8").split(/\W/)
let [a,b,c] = input.map(a => +a)
b += c
if (b > 59){
  a += Math.floor(b / 60)
}
if (a > 23) a -= 24
b %= 60
console.log(a, b)