var input = require('fs').readFileSync('/dev/stdin', 'utf8').split(' ')
var [a,b] = input
console.log(Number(a)+Number(b))