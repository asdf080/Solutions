let [a, ...inp] = require("fs").readFileSync(0, "utf8").trim().split("\n");
inp = inp
  .join("")
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let arr = [];

for (let i = 0; i < inp.length; i++) {
  arr.push(inp.slice(0, i + 1).reduce((a, b) => a + b, 0));
}
console.log(arr.reduce((a, b) => a + b));
