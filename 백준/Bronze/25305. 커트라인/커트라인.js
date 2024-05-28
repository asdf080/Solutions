const [a, ...input] = require("fs").readFileSync(0, "utf8").trim().split("\n")
console.log(input[0].split(" ").map(Number).sort((a,b)=>b-a)[a.split(" ")[1]-1]);