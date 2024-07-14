const inp = require("fs").readFileSync(0, "utf8").trim().split("\n");
inp.pop();
let arr = [];
inp.map((ip) => {
  let cnt = 0;
  ip.split("").map((ip) => {
    /^[aeiou]$/i.test(ip) ? cnt++ : 0;
  });
  arr.push(cnt);
});
arr.map((a) => console.log(a));
