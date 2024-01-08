const input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
console.log(input[1].split(' ').filter(n => n == input[2]).length)