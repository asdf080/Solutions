const input = require("fs").readFileSync("/dev/stdin", "utf8").split(" ").map(a => Number(a))
input[1] -= 45
if (input[1] < 0) {
  input[0]--;
  input[1] = input[1] + 60;
}
if (input[0] < 0) input[0] +=24
console.log(input[0],input[1])