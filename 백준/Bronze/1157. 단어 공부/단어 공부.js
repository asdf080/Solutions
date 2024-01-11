const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().toLowerCase().split('')
let obj = new Object()
for(let a of input){
  obj[a] = (obj[a] ? ++obj[a] : 1);
}
let arr = [];
for(let [k,v] of Object.entries(obj)){
  v == Math.max(...Object.values(obj)) ? 
  arr.push(k) : 0
}
console.log(arr.length > 1 ? "?" : arr[0].toUpperCase())