const [, ...input] = require("fs").readFileSync(0, "utf8").trim().split("\n").map(Number)
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

input.forEach(inp => {
  let num = inp
  while(true){
    if(num < 3){
      arr.push(2);
      break;
    }
    else if(isP(num)) {
      arr.push(num);
      break;
    } else ++num;
  }
})
console.log(arr.join("\n"));