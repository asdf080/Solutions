const [a, ...input] = require("fs").readFileSync(0, "utf8").trim().split("\n");

let arr = [];
let answer = [];

input.forEach((a) => {
  if (a.includes("push")) arr.push(a.split(" ")[1]);
  else if (a === "pop") {
    if (arr[arr.length - 1]) {
      answer.push(arr.pop());
    } else answer.push(-1);
  } else if (a === "size") answer.push(arr.length);
  else if (a === "empty") {
    if (arr.length) answer.push(0);
    else answer.push(1);
  } else {
    if (arr.length) answer.push(arr[arr.length - 1]);
    else answer.push(-1);
  }
});
console.log(answer.join("\n"));