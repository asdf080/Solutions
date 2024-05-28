const input = require("fs").readFileSync(0, "utf8").trim().split("\n")
const map = new Map()
input[1].split(" ").map(Number).forEach(a => map.set(a, true))
console.log(input[3].split(" ").map(Number).map(a => map.has(a) ? 1:0).join(" "));