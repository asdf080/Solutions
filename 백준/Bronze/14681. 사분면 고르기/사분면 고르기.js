const input = require("fs").readFileSync(0, "utf8").split("\n").map(a => Number(a))
console.log(input[0] > 0 && input[1] > 0 ? 1 
            : input[0] < 0 && input[1] > 0 ? 2 
            : input[0] < 0 && input[1] < 0 ? 3 : 4)