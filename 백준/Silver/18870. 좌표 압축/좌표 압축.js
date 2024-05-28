const [, ...input] = require("fs").readFileSync(0, "utf8").trim().split("\n")
const map = new Map();
[...new Set(input[0].split(" ").map(Number).sort((a,b)=>a-b))].forEach((a, idx) => map.set(a, idx));
console.log(input[0].split(" ").map(Number).map(a => map.get(a)).join(" "));