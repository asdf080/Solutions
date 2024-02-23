const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((a) =>
    a
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b)
  );
input.map(([a, b, c]) => {
  if (a === c && a === 0) return;
  if (a + b <= c) console.log("Invalid");
  else if (a === c) console.log("Equilateral");
  else if (a === b || b === c) console.log("Isosceles ");
  else console.log("Scalene");
});