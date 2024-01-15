const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n")
let arr = [];
let answer = 0;
let answer2 = 0;

input.map(a => a.split(''))
let obj = new Map([
  ["A+", 4.5],
  ["A0", 4.0],
  ["B+", 3.5],
  ["B0", 3.0],
  ["C+", 2.5],
  ["C0", 2.0],
  ["D+", 1.5],
  ["D0", 1.0],
  ["F", 0.0],

]);
for(let i of input){
  for(let key of obj.keys()){ 
    if(i.split(' ')[2] == "P") continue;
    if(i.split(' ')[2] == key){
      arr.push(i.split(key).join(obj.get(key)))
    }
  }
}
for(let a of arr){
  answer += a.split(' ')[1]*a.split(' ')[2]
  answer2 += Number(a.split(' ')[1])
}
console.log((answer/answer2).toFixed(5))