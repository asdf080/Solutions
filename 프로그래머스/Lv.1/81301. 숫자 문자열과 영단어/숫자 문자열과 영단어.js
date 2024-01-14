function solution(s) {
    return Number(s.replace(/zero|one|two|three|four|five|six|seven|eight|nine/g, (v) =>{
      if(v == "zero") return 0;
      if(v == "one") return 1;
      if(v == "two") return 2;
      if(v == "three") return 3;
      if(v == "four") return 4;
      if(v == "five") return 5;
      if(v == "six") return 6;
      if(v == "seven") return 7;
      if(v == "eight") return 8;
      if(v == "nine") return 9;
    }));
}