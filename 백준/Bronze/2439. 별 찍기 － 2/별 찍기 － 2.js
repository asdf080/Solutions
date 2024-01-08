const input = Number(require("fs").readFileSync("/dev/stdin", "utf8"))
for(let i=1;i<=input;i++){
  console.log(" ".repeat(input-i)+"*".repeat(i))
}