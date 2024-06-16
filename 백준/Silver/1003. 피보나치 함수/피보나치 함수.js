const [a, ...input] = require("fs").readFileSync(0, "utf8").trim().split("\n").map(Number);

let arr = [
  [1, 0],
  [0, 1],
];

input.map((ip) => {
  if (!arr[ip]) {
    for (let i = 2; i <= ip; i++) {
      arr[i] = [];
      arr[i][0] = arr[i - 1][0] + arr[i - 2][0];
      arr[i][1] = arr[i - 1][1] + arr[i - 2][1];
    }
  }
  console.log(arr[ip].join(" "));
});
