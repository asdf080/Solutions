const [a, b, c] = require("fs").readFileSync(0, "utf8").trim().split(" ");
let sum = {};
for (let i = 1; i <= a; i++) {
  for (let j = 1; j <= b; j++) {
    for (let k = 1; k <= c; k++) {
      sum[i + j + k] ? (sum[i + j + k] += 1) : (sum[i + j + k] = 1);
    }
  }
}
let max = Math.max(...Object.values(sum));
let ans = Object.keys(sum).find((a) => sum[a] === max);
console.log(ans);
