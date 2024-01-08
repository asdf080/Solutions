const input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
console.log(input[1].split(' ').map(Number).filter(a => +input[0].split(' ')[1] > a).join(' '))