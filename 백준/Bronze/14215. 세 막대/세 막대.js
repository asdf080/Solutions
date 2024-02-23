const [a, b, c] = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

if (a + b > c) console.log(a + b + c);
else console.log(a + b + a + b - 1);