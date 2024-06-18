const input = require("fs").readFileSync(0, "utf8").trim();

let count = 0;
if (input < 10) count = input;
else {
  count = 9;
  loop: for (let i = 10; i <= input; i++) {
    let dif;
    let arr = `${i}`.split("");
    for (let j = 0; j < arr.length; j++) {
      if (arr[j + 1]) {
        if (dif === undefined) dif = arr[j] - arr[j + 1];
        if (dif !== arr[j] - arr[j + 1]) {
          continue loop;
        }
      }
    }
    count++;
  }
}
console.log(count);