const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split(" ")
  .map((a) => Number(a));
const [A, B, C] = input;

console.log((A + B) % C);
console.log(((A % C) + (B % C)) % C);
console.log((A * B) % C);
console.log(((A % C) * (B % C)) % C);