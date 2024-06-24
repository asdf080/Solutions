let [a, ...inp] = require("fs").readFileSync(0, "utf8").trim().split("\n");
inp = inp[0].split(" ").map(Number);
console.log(Math.min(...inp) * Math.max(...inp));
