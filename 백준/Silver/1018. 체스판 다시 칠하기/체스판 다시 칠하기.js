let [a, ...input] = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
let [n, m] = a.split(" ").map(Number);
let answer = [];

const white = ["WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW"];
const black = ["BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB"];

function check(x, y, color) {
  let count = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (input[i + x][j + y] !== color[i][j]) count++;
    }
  }
  return count;
}

for (let k = 0; k < n - 7; k++) {
  for (let l = 0; l < m - 7; l++) {
    answer.push(check(k, l, white));
    answer.push(check(k, l, black));
  }
}
console.log(Math.min(...answer));