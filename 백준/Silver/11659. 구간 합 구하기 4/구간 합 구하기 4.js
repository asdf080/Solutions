let [a, b, ...inp] = require("fs").readFileSync(0, "utf8").trim().split("\n");
b = b.split(" ").map(Number);
inp = inp.map((ip) => ip.split(" ").map((i) => Number(i) - 1));
let aSum = [b[0]];
for (let i = 1; i < b.length; i++) {
  aSum.push(aSum[i - 1] + b[i]);
}
let answer = [];
inp.forEach(([start, end]) => {
  if (start === 0) answer.push(aSum[end]);
  else answer.push(aSum[end] - (aSum[start - 1] ?? 0));
});
console.log(answer.join("\n"));