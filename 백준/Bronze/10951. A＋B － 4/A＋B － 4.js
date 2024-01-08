for(let a of require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n")){
  console.log(a[0]- -a[2])
}