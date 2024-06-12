const input = +require("fs").readFileSync(0, "utf8").trim();

let arr = [0, 0, 1];

for (let i = 3; i <= input; i++) {
  let a = arr[i - 1] + 1;
  let b = i % 3 === 0 ? arr[i / 3] + 1 : 100000;
  let c = i % 2 === 0 ? arr[i / 2] + 1 : 100000;
  arr[i] = Math.min(a, b, c);
}
console.log(arr[input]);