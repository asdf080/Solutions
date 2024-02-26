function solution(n){
    let a = 0;

    while (n > 0) {
      if (n % 2 !== 0) {
        n -= 1;
        a++;
      }
      n /= 2;
    }

    return a;
}