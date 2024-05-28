const [a, ...arr1] = require("fs").readFileSync(0, "utf8").trim().split("\n")
const [b, c] = a.split(" ").map(Number)
const arr2 = arr1.splice(b,c)
const obj = {}
const answer = [];

arr2.forEach(a2 => obj[a2] = true)
arr1.forEach(a1 => {
  if(obj[a1] === true) answer.push(a1)
})
console.log(answer.length + "\n" + answer.sort().join("\n"))