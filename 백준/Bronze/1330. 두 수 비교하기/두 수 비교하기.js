const input = require("fs").readFileSync("/dev/stdin", "utf8").split(" ").map(a => Number(a))
console.log(input[0] > input[1] ? ">" : input[0] < input[1] ? "<" : "==");