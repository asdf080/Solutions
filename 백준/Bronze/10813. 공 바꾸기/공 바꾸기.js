const [A, ...B] = require("fs").readFileSync("/dev/stdin", "utf8").split("\n")
let arr = Array(+A.split(' ')[0]).fill(0).map((_,i) => String(++i))
B.map(v => {
  const [x, y] = v.split(' ').map(Number);
  let tmp = arr[y-1]
  arr[y-1] = arr[x-1] 
  arr[x-1] = tmp
})
console.log(arr.join(' '))