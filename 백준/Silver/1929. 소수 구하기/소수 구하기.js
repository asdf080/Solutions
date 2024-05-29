const [a, b] = require("fs").readFileSync(0, "utf8").trim().split(" ").map(Number)
const arr = [];

function isP(a){
  if(a === 3) return true;
  else {
    for(let i=2;i<=Math.sqrt(a);i++){
      if(a%i === 0) return false;
    }
  }
  return true;
}

for(let i=a;i<=b;i++){
  if(i < 2) continue;
  if(isP(i)) arr.push(i)
}
console.log(arr.join("\n"));