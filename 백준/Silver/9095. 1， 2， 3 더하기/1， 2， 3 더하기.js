let [a, ...inp] = require("fs").readFileSync(0, "utf8").trim().split("\n").map(Number);
let arr = [0, 1, 2, 4];

for (let i = 4; i <= Math.max(...inp); i++) {
  arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
}
inp.forEach((ip) => console.log(arr[ip]));
