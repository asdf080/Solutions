const input = require("fs").readFileSync("/dev/stdin", "utf8").trim();
let x = Number(input);
count = 0;

while (x > 0) x = x - ++count;
x += count;

if (count % 2 == 1) {
  console.log(`${count - x + 1}/${x}`);
} else console.log(`${x}/${count - x + 1}`);