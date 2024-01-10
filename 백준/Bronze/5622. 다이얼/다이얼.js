const input = require("fs").readFileSync("/dev/stdin", "utf8").trim()
let answer = 0;
const alp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
for(let a of input){
  if(alp.indexOf(a) < 3) answer+=3;
  else if(alp.indexOf(a) < 6) answer+=4;
  else if(alp.indexOf(a) < 9) answer+=5;
  else if(alp.indexOf(a) < 12) answer+=6;
  else if(alp.indexOf(a) < 15) answer+=7;
  else if(alp.indexOf(a) < 19) answer+=8;
  else if(alp.indexOf(a) < 22) answer+=9;
  else answer+=10;
}

console.log(answer)