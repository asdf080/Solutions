const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split(" ");
console.log(Number.parseInt(input[0], +input[1]));