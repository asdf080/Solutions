const input = +require("fs").readFileSync(0, "utf8").trim();
let a = input
let num5 = 0

loop1: while(true){
  a -= 5;
  num5++;
  if(a<5 && a%3 === 0){
    console.log(num5 + a/3);
    break loop1;
  } else if (a<5 && a%3 !== 0){
    while (true) {
      a += 5;
      num5--;
      if(a%3 === 0){
        console.log(num5 + a/3);
        break loop1;
      } else if(a >= input){
        console.log(-1);
        break loop1;
      }
    }
  }
}