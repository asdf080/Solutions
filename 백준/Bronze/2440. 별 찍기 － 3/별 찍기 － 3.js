const inp = require("fs").readFileSync(0, "utf8").trim();

for (let i = inp; i > 0; i--) {
  let start = "";
  for (let j = i; j > 0; j--) {
    start += "*";
  }
  console.log(start);
}
