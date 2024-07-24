const [a, b] = require("fs").readFileSync(0, "utf8").trim().split(" ");
let sum = 0;

for (let i = 0; i < a.length; i++) {
  for (let j = 0; j < b.length; j++) {
    sum += a[i] * b[j];
  }
}
console.log(sum);
