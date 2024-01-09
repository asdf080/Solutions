let answer = ""
for(let i=1;i<=30;i++){
  require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n").map(Number).sort((a,b) => a-b).includes(i) ? 0: answer+=` ${i}`
}
console.log(answer.trim())