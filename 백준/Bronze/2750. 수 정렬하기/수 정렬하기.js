const [, ...input] = require("fs").readFileSync(0, "utf8").trim().split("\n")
new Set(input.map(Number).sort((a,b) => a-b)).forEach(s => console.log(s))