const input = +require("fs").readFileSync("/dev/stdin", "utf8").trim();
let num = 0;

for (let i = 1; i <= input; i++) {
  if (i + `${i}`.split("").reduce((a, b) => a + Number(b), 0) === input) {
    num = i;
    break;
  }
}
console.log(num);