const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n").map((x) => x.trim().split(""));

let a = "";
for (let i = 0; i < 15; i++) {
  for (let j = 0; j < input.length; j++) {
    if (input[j][i]) a += input[j][i];
    else continue;
  }
}
console.log(a);
