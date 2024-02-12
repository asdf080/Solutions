const [a,b] = require("fs").readFileSync("/dev/stdin", "utf8").trim()
  .split(" ")
  .map(Number);

let num = 1,
  count = 0;

while (num <= a) {
  if (a % num === 0) count++;
  if (count === b) break;
  ++num;
}

if (num <= a) console.log(num);
else console.log(0);