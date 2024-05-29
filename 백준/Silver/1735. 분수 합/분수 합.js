const [[a,b],[c,d]] = require("fs").readFileSync(0, "utf8").trim().split("\n").map(a => a.split(" "));

const nu = (a*d)+(b*c)
const de = b*d

function lcd(a,b){
  if(b === 0) return a
  return lcd(b, a%b)
}

console.log(nu/lcd(nu, de), de/lcd(nu,de));