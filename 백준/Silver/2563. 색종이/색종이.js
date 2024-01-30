let [a, ...input] = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n").map((x) => x.trim().split(" "));
let arr = [];
input = input.map((a) => a.map(Number));
for (let [a, b] of input) {
  for (let i = a; i < a + 10; i++) {
    for (let j = b; j < b + 10; j++) {
      if (!arr.includes(`${i},${j}`)) {
        arr.push(`${i},${j}`);
      }
    }
  }
}
console.log(arr.length);
