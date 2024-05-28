const [, ...input] = require("fs").readFileSync(0, "utf8").trim().split("\n")
console.log([...new Set(input.map(Number).sort((a,b) => a-b))].join("\n"))