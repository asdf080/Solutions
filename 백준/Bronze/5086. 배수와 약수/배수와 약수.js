const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((a) => a.split(" ").map(Number));
input.map(([a, b]) => {
  if (a == 0) return;
  else if (b % a == 0) console.log("factor");
  else if (a % b == 0) console.log("multiple");
  else console.log("neither");
});
