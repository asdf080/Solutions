let [a, ...inp] = require("fs").readFileSync(0, "utf8").trim().split("\n");
inp = inp
  .map((ip) => ip.split(" ").map(Number))
  .map((ip) => {
    let [num, ...res] = ip;
    let ave = (res.reduce((a, b) => a + b) / num).toFixed(3);
    console.log(((res.filter((re) => re > ave).length / num) * 100).toFixed(3) + "%");
  });
