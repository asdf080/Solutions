const input = require("fs").readFileSync(0, "utf8").trim().split("\n").map(Number).sort((a,b) => a-b)
console.log([...input].reduce((a,b) => a+b)/input.length);
console.log(input[2]);