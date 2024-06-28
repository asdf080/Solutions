require("fs").readFileSync(0, "utf8").trim().split("\n")
  .map((ip) => {
    let cm = 1;
    if (ip === "0") return;
    ip.split("").map((ip) => {
      if (ip === "0") cm += 5;
      else if (ip === "1") cm += 3;
      else cm += 4;
    });
    console.log(cm);
  });