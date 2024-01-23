const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n").map((x) => x.trim().split(" "));
let n = x = y = 0;
let arr = [];
for (let i = 0; i < 9; i++) {
  n = Math.max(n, ...input[i].map(Number));
}
for (let j = 0; j < 9; j++) {
  for (k = 0; k < 9; k++) {
    if (input[j][k] == n) {
      x = j;
      y = k;
      break;
    }
  }
  if (arr.length == 2) break;
}

console.log(n);
console.log(`${x + 1} ${y + 1}`);