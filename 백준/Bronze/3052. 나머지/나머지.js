const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n").map(a => a%42);
console.log(new Set(input).size)