let a = Number(require("fs").readFileSync("/dev/stdin", "utf8").trim());

while (true) {
  for (let i = 2; i <= a; i++) {
    if (a % i === 0) {
      console.log(i);
      a /= i;
      break;
    }
  }
  if (a === 1) break;
}
