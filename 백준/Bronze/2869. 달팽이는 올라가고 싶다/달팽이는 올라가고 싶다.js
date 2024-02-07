const [a, b, c] = require("fs").readFileSync("/dev/stdin", "utf8").trim().split(" ").map(Number);
console.log(Math.ceil((c - b) / (a - b)));