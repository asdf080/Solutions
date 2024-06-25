let [a, ...inp] = require("fs").readFileSync(0, "utf8").trim().split("\n");
a = a.split(" ")[1];
inp = inp.map(Number).filter((ip) => ip <= a).sort((A, b) => b - a);
let count = 0;
while (a !== 0) {
  let coin = inp.shift();
  if (a >= coin) {
    count += Math.floor(a / coin);
    a -= coin * Math.floor(a / coin);
  } else continue;
}
console.log(count);