const [, ...input] = require("fs").readFileSync(0, "utf8").trim().split("\n").map(Number)
let arr = [], answer = 0;

function lcd(a,b){
  if(b === 0) return a;
  return lcd(b, a%b)
}
for(let i = 0;i<input.length-1;i++){
  arr.push(Math.abs(input[i] - input[i+1]))
}

let num = arr[0];
arr.forEach(a => num = lcd(num, a))
arr.forEach(a => answer += a/num -1)
console.log(answer);