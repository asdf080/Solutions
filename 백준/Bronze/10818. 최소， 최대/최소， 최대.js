let a = require("fs").readFileSync("/dev/stdin", "utf8").split("\n")[1].split(' ')
console.log(Math.min(...a), Math.max(...a))