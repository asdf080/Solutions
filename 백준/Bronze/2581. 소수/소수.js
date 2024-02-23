let [a, b] = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n").map(Number);

let arr = [];
loop1: for (let j = a; j <= b; j++) {
  if (j === 1) continue;
  for (let i = 2; i < j; i++) {
    if (j % i === 0) continue loop1;
  }
  arr.push(j);
}

if (arr.length === 0) console.log(-1);
else {
  console.log(`${arr.reduce((a, b) => a + b)}\n${arr[0]}`);
}