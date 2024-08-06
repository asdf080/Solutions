const inp = require("fs").readFileSync(0, "utf8").trim().split("\n").map(Number);
let [inpA, inpB] = inp;
let inpA1 = `${inpA}`.split("");
inpA1.splice(-2, 2);
inpA = Number(inpA1.join("") + "00");
while (inpA % inpB !== 0) {
  inpA += 1;
}
console.log(`${inpA}`.split("").splice(-2, 2).join(""));