let input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n")
let arr0 = input[0].split(' ').map(Number)
let answerArr = Array.from({length:arr0[0]}).fill(0)
for(let i=1;i<=arr0[1];i++){
  let arr1 = input[i].split(' ').map(Number)
  for(let j=arr1[0]-1;j<arr1[1];j++){
    answerArr[j] = arr1[2];
  }
}
console.log(answerArr.join(' '))