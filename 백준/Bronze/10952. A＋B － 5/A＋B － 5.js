for(let a of require("fs").readFileSync("/dev/stdin", "utf8").split("\n")){
  +a[0]&&console.log(a[0]- -a[2])
}