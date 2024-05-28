const [, b, c] = require("fs").readFileSync(0, "utf8").trim().split("\n")
const set1 = new Set(b.split(" "));
const set2 = new Set(c.split(" "));
let num = set1.size + set2.size;

[...set2].forEach(s => set1.has(s) && --num);
[...set1].forEach(s => set2.has(s) && --num);
console.log(num);