const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n").map(Number)

input.map((aNum) => {
  if (aNum == -1) return;
  let num = 1,
    arr = [];
  while (num < aNum) {
    if (aNum % num === 0) arr.push(num);
    num++;
  }

  if (arr.reduce((a, b) => a + b) === aNum) {
    console.log(`${aNum} = ${arr.join(` + `)}`);
  } else console.log(`${aNum} is NOT perfect.`);
});