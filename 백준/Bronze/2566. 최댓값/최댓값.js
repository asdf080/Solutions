const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n").map((x) => x.trim().split(" "));
let n = 0;
let arr = [];
for (let i = 0; i < 9; i++) {
  n = Math.max(n, ...input[i].map(Number));
}
for (let j = 0; j < 9; j++) {
  for (k = 0; k < 9; k++) {
    if (input[j][k] == n) {
      arr.push(j);
      arr.push(k);
    }
  }
}

console.log(n);
console.log(...arr.map((a) => a + 1));
