const input = Number(require("fs").readFileSync("/dev/stdin", "utf8"))
console.log((input % 4 == 0 && input % 100 != 0) || input % 400 == 0 ? 1:0)