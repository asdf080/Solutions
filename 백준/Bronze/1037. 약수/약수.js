let inp = require("fs").readFileSync(0, "utf8").trim().split("\n")[1].split(" ");
console.log(Math.min(...inp) * Math.max(...inp));
