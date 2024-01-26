function solution(numbers) {
    let obj = new Set();
    for (let i = 0; i < numbers.length; i++) {
      for (let j = 0; j < numbers.length; j++) {
        if (i == j) continue;
        obj.add(numbers[i] + numbers[j]);
      }
    }
    return [...obj].sort((a, b) => a - b);
}