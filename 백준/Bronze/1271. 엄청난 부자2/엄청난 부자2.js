let [a, b] = require("fs").readFileSync(0, "utf8").trim().split(" ").map(BigInt);
console.log(a / b + "\n" + (a % b));
