let inp = require("fs").readFileSync(0, "utf8").trim().split("\n").map((ip) => (ip.length <= 6 ? Number(ip) : BigInt(ip)));
while (inp.length > 1) {
  let sum = inp.splice(1, inp[0]).reduce((a, b) => BigInt(a) + BigInt(b), 0);
  inp.shift();
  if (sum > 0) console.log("+");
  else if (sum < 0) console.log("-");
  else console.log(0);
}
