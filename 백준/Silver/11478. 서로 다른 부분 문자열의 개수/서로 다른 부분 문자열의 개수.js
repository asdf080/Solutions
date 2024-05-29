const input = require("fs").readFileSync(0, "utf8").trim()
const set = new Set()

for(let i=0;i<input.length;i++){
  for(let j=0,k=1;j<input.length;j++,k++){
    set.add(input.slice(j,k+i))
  }
}
console.log(set.size);