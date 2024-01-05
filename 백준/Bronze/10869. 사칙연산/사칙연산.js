const input = require('fs').readFileSync('dev/stdin','utf8').split(' ');
const [a, b] = [Number(input[0]), Number(input[1])];
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(Math.floor(a / b));
console.log(a % b);
