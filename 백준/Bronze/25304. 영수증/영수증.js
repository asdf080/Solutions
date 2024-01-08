const input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n")
for(let i=2;i<+input[1]+2;i++){
  input[0]-=(input[i].split(' ')[0]*input[i].split(' ')[1])
}
console.log(input[0] ? "No" : "Yes")