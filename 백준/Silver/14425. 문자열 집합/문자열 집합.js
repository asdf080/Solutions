const [a, ...arr1] = require("fs").readFileSync(0, "utf8").trim().split("\n")
const N = a.split(" ")[0]
const M = a.split(" ")[1]
const arr2 = arr1.splice(N, M)
const map = new Map()
let num = 0;

arr1.forEach(a => map.set(a, true))
arr2.forEach(a => map.has(a) ? num++ : false)
console.log(num);
