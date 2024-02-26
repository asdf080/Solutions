const input = require("fs").readFileSync("/dev/stdin", "utf8").trim();
let num = BigInt(input);
console.log(`${num * num * num}`);
console.log('3');