const [a, ...arr1] = require("fs").readFileSync(0, "utf8").trim().split("\n")
const N = a.split(" ")[0]
const M = a.split(" ")[1]
const arr2 = arr1.splice(N , M)
const map1 = new Map()
const map2 = new Map()
arr1.forEach((a, idx) => map1.set(idx+1, a))
arr1.forEach((a, idx) => map2.set(a, idx+1))
const answer = arr2.map(a => {
  if(map1.has(Number(a))) return map1.get(Number(a))
  return map2.get(a.toString())
})
console.log(answer.join("\n"));