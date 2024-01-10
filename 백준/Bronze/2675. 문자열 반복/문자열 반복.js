const [a, ...b] = require("fs").readFileSync("/dev/stdin", "utf8").trim().split(`\n`)
for(let i=0;i<a;i++){
  let x = ""
  for(let y of b[i].split(' ')[1]){
    x+= y.repeat(b[i].split(' ')[0])
  }
  console.log(x)
}