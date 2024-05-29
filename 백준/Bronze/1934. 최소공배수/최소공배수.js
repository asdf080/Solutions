const [a, ...input] = require("fs").readFileSync(0, "utf8").trim().split("\n")
const arr = input.map(i => i.split(" ").map(Number))

function lcd(a,b){
  if(b === 0) return a
  return lcd(b, a % b)
}

arr.forEach(a => {
  [b, c] = a
  console.log((b*c) / lcd(b,c));
})
