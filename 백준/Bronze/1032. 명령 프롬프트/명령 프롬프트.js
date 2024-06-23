let [a, ...inp] = require("fs").readFileSync(0, "utf8").trim().split("\n");

let str = "";
if (a == 1) {
  str = inp[0];
} else {
  for (let i = 0; i < inp[0].length; i++) {
    let arr = [];
    for (let j = 0; j < a; j++) {
      arr.push(inp[j][i]);
    }
    arr.every((ar) => arr[0] === ar) ? (str += arr[0]) : (str += "?");
  }
}
console.log(str);