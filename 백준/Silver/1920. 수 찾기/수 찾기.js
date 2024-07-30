let [a, arr1, b, arr2] = require("fs").readFileSync(0, "utf8").trim().split("\n");

let answer = [];
let set1 = new Set(arr1.split(" "));
arr2.split(" ").map((a) => {
  if (set1.has(a)) answer.push(1);
  else answer.push(0);
});
console.log(answer.join("\n"));
