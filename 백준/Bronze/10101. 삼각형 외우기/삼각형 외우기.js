let [a, b, c] = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map(Number)
  .sort((a, b) => a - b);

if (a === c && a === 60) console.log("Equilateral");
else if (a + b + c === 180 && (a === b || b === c)) console.log("Isosceles");
else if (a + b + c === 180) console.log("Scalene");
else console.log("Error");