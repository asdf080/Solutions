const [_, ...b] = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n")
for(let s of b){
  console.log(s[0]+s[s.length-1])
}