let [_, ...input] = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n")
input = input[0].split(" ").map(Number);
let count = 0;

input.map((b) => {
  if (b === 1) return;
  let num = 2,
    num2 = 0;
  while (num < b) {
    if (b % num++ === 0) num2++;
  }
  if (num2 === 0) count++;
});
console.log(count);