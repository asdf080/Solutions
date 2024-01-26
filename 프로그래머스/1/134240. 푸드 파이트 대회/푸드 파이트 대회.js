function solution(food) {
    let result = [];

    food.forEach((n, i) => {
      if (n / 2 >= 1) {
        for (let j = 0; j < Math.floor(n / 2); j++) {
          result.push(i);
        }
      }
    });
    return [...result, 0, ...result.reverse()].join('')
}