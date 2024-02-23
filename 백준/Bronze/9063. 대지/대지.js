let [a, ...input] = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
input = input.map((a) => a.split(" ").map(Number));

let x = input.map((a) => a[0]).reduce((a, b) => Math.max(a, b)) - input.map((a) => a[0]).reduce((a, b) => Math.min(a, b));

let y = input.map((a) => a[1]).reduce((a, b) => Math.max(a, b)) - input.map((a) => a[1]).reduce((a, b) => Math.min(a, b));
console.log(x * y);
