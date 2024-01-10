const input = require("fs").readFileSync("/dev/stdin", "utf8").trim()
let alp = "abcdefghijklmnopqrstuvwxyz"
let an = "";
for(let a of alp) {
  an += input.indexOf(a) +" "
}
console.log(an.trim())