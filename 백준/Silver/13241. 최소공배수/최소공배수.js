const [a, b] = require("fs").readFileSync(0, "utf8").trim().split(" ")

function lcd(a,b){
  if(b === 0) return a
  return lcd(b, a % b)
}
console.log((a*b) / lcd(a,b));
