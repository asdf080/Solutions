let [_, ...input] = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n")

let answer = 0;
for(let i=0;i<input.length;i++){
  let group = 0;
  let str = input[i].split('')
  for(let j=0;j<str.length;j++){
    let count = 0;
    for(let k=0;k<str.length;k++){
      str[j] == str[k] ? ++count : 0
    } 
    str.lastIndexOf(str[j]) - str.indexOf(str[j])+1 == count ? ++group : 0
  }
  str.length == group ? ++answer:0
}
console.log(answer)
