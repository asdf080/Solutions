const nums = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n").map(x => x.trim().split(' '))
let [a, ...input] = nums
let arr = input.splice(0,+a[0])
let answer = [];
for(let i=0;i<arr.length;i++){
  let arr2 = arr[i].map(Number)
  let input2 = input[i].map(Number)
  answer[i] = []
  for(let j=0;j<Number(a[1]);j++){
    answer[i].push(arr2[j]+input2[j])
  }
}
answer.forEach(v => {
  console.log(v.join(' '))
})