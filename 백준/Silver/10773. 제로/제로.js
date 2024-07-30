const [a, ...inp] = require("fs").readFileSync(0, "utf8").trim().split("\n").map(Number);
let sum = [];
let num;
inp.map((ip) => {
  if (ip === 0) {
    sum.pop();
    num = sum.at(-1);
    return;
  }
  sum.push(ip);
  num = ip;
});
console.log(sum.reduce((a, b) => a + b, 0));
