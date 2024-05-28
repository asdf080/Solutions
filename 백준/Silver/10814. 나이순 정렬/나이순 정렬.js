const [, ...input] = require("fs").readFileSync(0, "utf8").trim().split("\n")
console.log(input.sort((a,b)=>  a.split(" ")[0] - b.split(" ")[0]).join("\n"));