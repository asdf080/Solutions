const [, ...input] = require("fs").readFileSync(0, "utf8").trim().split("\n")
let arr = input
arr.sort((a,b)=> {
  let [a1, a2] = a.split(" ")
  let [b1, b2] = b.split(" ")
  return a1 - b1
})
console.log(arr.join("\n"));