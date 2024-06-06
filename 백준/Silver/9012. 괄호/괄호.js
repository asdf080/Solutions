const [a, ...input] = require("fs").readFileSync(0, "utf8").trim().split("\n");

for (let i = 0; i < input.length; i++) {
  while (input[i].includes("()")) {
    input[i] = input[i].replaceAll("()", "");
  }
}
input.forEach((ip) => (ip === "" ? console.log("YES") : console.log("NO")));
