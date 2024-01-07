const input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n")
for(let i=1;i<=input[0];i++){
  console.log(Number(input[i][0])+Number(input[i][2]))
}