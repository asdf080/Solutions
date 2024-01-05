const input = Number(require("fs").readFileSync("/dev/stdin", "utf8"))
console.log(input > 89 ? "A" : input > 79 ? "B" : input > 69 ? "C" : input > 59 ? "D" : "F")