const [a, b] = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n")
console.log(a[b-1])