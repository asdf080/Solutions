const [a, ...b] = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n")
let answerArr = Array(+a.split(' ')[0]).fill(0).map((_,i)=> ++i)
b.map(v => {
  [x,y]=v.split(' ').map(Number);
  let r = answerArr.slice(x-1,y).reverse()
  let j =0;
  for(let i=x-1;i<y;i++){
    answerArr[i] = r[j++]
  }
})
console.log(answerArr.join(' '))