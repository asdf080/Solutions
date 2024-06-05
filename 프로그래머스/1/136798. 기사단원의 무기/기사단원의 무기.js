function solution(number, limit, power) {
    let arr = [];

    for (let i = 1; i <= number; i++) {
      let count = 0;
      for (let j = 1; j ** 2 <= i; j++) {
        if (j ** 2 == i) count++;
        else if (i % j == 0) count += 2;
      }
      arr.push(count);
    }
    arr.forEach((a, idx) => {
      if (a > limit) arr[idx] = power;
    });
    return arr.reduce((a, b) => a + b)
}