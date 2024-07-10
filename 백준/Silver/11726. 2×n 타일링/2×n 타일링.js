const inp = require("fs").readFileSync(0, "utf8").trim();

if (inp < 4) console.log(inp);
else {
  let arr = [0, 1, 2, 3];
  for (let i = 4; i <= inp; i++) {
    arr.push((arr[i - 1] + arr[i - 2])%10007);
  }
  console.log(arr[inp]);
}
