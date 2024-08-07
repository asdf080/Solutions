const inp = require("fs").readFileSync(0, "utf8").trim();

for (let i = 1; i <= inp; i++) {
  let line = "";
  for (let j = inp - i; j > 0; j--) line += " ";
  for (let k = 1; k <= i; k++) line += "*";
  console.log(line);
}
for (let i = 1; i <= inp; i++) {
  let line = "";
  for (let k = 1; k <= i; k++) line += " ";
  for (let j = inp - i; j > 0; j--) line += "*";
  console.log(line);
}