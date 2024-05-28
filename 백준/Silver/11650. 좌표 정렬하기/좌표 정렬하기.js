const [, ...input] = require("fs").readFileSync(0, "utf8").trim().split("\n")
input.sort((a,b)=> {
  const [a1, a2] = a.split(" ").map(Number)
  const [b1, b2] = b.split(" ").map(Number)
  if(a1 === b1) return a2 - b2
  return a1 - b1
})
console.log(input.join("\n"));