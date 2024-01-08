let input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n").map(Number)
console.log(
  Math.max(...input),
  input.indexOf(Math.max(...input))+1
  )