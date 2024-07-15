let inp = require("fs").readFileSync(0, "utf8").trim().split("\n");
inp.pop();
inp
  .map((ip) => ip.split(" "))
  .map((ip) => {
    if (ip[1] > 17 || ip[2] >= 80) {
      console.log(`${ip[0]} Senior`);
    } else console.log(`${ip[0]} Junior`);
  });
