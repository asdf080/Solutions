const input = require("fs").readFileSync("/dev/stdin", "utf8").split(" ").map(a => +a).sort((a,b) => a-b)
let answer = 0;
if(input[0] == input[2]) answer = 10000+input[0]*1000
else if(input[0] == input[1] || input[1] == input[2]) answer =  1000+(input[1]*100)
else answer = Math.max(...input)*100
console.log(answer)