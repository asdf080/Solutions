const inp = BigInt(require("fs").readFileSync(0, "utf8").trim());
let sum = BigInt(1);
for (let i = inp; i > 1; i--) {
  sum *= i;
}
console.log(
  `${sum}`
    .split("")
    .reverse()
    .findIndex((s) => s != 0)
);