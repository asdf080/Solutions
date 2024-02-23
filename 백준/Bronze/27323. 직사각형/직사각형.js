let [a, b] = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n").map(Number);
console.log(a*b)