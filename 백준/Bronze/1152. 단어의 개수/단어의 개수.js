const input = require("fs").readFileSync("/dev/stdin", "utf8").trim()
console.log(input == "" ? 0 : input.split(' ').length)