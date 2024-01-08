const input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n")
for(let a of input){
  +a[0]&&console.log(a[0]- -a[2])
}