const [,a,,b] = require("fs").readFileSync(0, "utf8").trim().split("\n")
const obj = {}
const arr = [];

a.split(" ").forEach(c => obj[c] = obj[c] ? obj[c]+1 : 1)
b.split(" ").forEach(d => arr.push(obj[d] ? obj[d] : 0))
console.log(arr.join(" "));