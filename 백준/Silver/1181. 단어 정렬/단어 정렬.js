const [, ...input] = require("fs").readFileSync(0, "utf8").trim().split("\n")
console.log([...new Set(input)].sort().sort((a,b)=> a.length - b.length).join("\n"));