let [z, ...inp] = require("fs").readFileSync(0, "utf8").trim().split("\n");
inp = inp.map((ip) => {
  let [a, b] = ip.split(" ");
  if (b % 4 === 0) {
    console.log(a ** 4 % 10 || 10);
  } else console.log(a ** (b % 4) % 10 || 10);
});