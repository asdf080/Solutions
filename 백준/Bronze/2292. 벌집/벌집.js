const input = require("fs").readFileSync("/dev/stdin", "utf8").trim();
let a = 2, b = 7, num = 1;
while (true) {
  if (input == 1) {
    console.log(1);
    break;
  }
  if (a <= input && input <= b) {
    console.log(++num);
    break;
  }
  ++num;
  a = b + 1;
  b = a + 6 * num - 1;
}
