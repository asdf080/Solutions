const input = require("fs").readFileSync("/dev/stdin", "utf8").trim()
for(let i=1;i<=input;i++){
  let a = " ".repeat(input-i)
  let b = "*".repeat(i*2-1)
  console.log(a+b)
}
for(let i=input-1;i>0;i--){
  let a = " ".repeat(input-i)
  let b = "*".repeat(i*2-1)
  console.log(a+b)
}