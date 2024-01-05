const [a,b] = require("fs").readFileSync("/dev/stdin", "utf8").split("\n")
console.log(Number(a) * Number(b[2]));
console.log(Number(a)* Number(b[1]));
console.log(Number(a)* Number(b[0]));
console.log(Number(a)* Number(b));