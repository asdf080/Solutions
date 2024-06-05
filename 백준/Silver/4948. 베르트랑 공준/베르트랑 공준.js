const input = require("fs").readFileSync(0, "utf8").trim().split("\n").map(Number);
input.pop();
let arr = [];

arr = input.map((inp) => {
  let count = 0;
  for (let i = inp + 1; i <= 2 * inp; i++) {
    if (i < 2) continue;
    let isPrime = true;
    for (let j = 2; j * j <= i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) count++;
  }
  return count;
});
console.log(arr.join("\n"));