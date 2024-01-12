let input = require("fs").readFileSync("/dev/stdin", "utf8").trim()
const obj = new Map([
  ["c=","č"],
  ["c-","ć"],
  ["dz=","d"],
  ["d-","đ"],
  ["lj","l"],
  ["nj","n"],
  ["s=","š"],
  ["z=","ž"],
])
obj.forEach((v,k,map) => {
  input = input.replaceAll(k,v)
})
console.log(input.length)