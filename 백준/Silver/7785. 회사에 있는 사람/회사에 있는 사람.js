const [, ...input] = require("fs").readFileSync(0, "utf8").trim().split("\n")
const map = new Map();
const arr = [];

input.forEach(inp => {
  [a, b] = inp.split(" ");
  map.set(a,b)
})

map.forEach((v,k) => {
  if(v !== "leave") arr.push(k)
})
console.log(arr.sort().reverse().join("\n"));