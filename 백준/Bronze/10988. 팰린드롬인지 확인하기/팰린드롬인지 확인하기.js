const input = require("fs").readFileSync("/dev/stdin", "utf8").trim()
console.log(input == input.split('').reverse().join('') ? 1:0)