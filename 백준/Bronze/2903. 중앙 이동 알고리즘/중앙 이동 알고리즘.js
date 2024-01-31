const input = require("fs").readFileSync("/dev/stdin", "utf8").trim();
console.log((2 ** input + 1) ** 2);
