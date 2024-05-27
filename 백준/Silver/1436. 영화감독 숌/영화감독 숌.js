let input = +require("fs").readFileSync(0, "utf8").trim();

let curse = 666,
  num = 1;

while (true) {
  if (num === input) break;
  curse++;
  if (`${curse}`.includes("666")) num++;
}
console.log(curse);