const [a, ...input] = require("fs").readFileSync(0, "utf8").trim().split("\n");

console.log(
  input.map((_, idx) => {
    while (input[idx].includes("()")) {
      input[idx] = input[idx].replaceAll("()", "");
    }
    if (input[idx] === "") return "YES";
    else return "NO";
  }).join("\n")
)