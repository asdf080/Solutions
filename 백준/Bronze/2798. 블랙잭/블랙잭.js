const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
const a = +input[0].split(" ")[1];
const b = input[1].split(" ").map(Number);

let min = 400000;
for (let i = 0; i < b.length; i++) {
  for (let j = i + 1; j < b.length; j++) {
    for (let k = j + 1; k < b.length; k++) {
      if (b[i] + b[j] + b[k] > a) continue;
      if (Math.abs(a - min) > a - (b[i] + b[j] + b[k])) min = b[i] + b[j] + b[k];
    }
  }
}
console.log(min == 400000 ? 0 : min);