function solution(elements) {
    let set = new Set();

    for (let i = 1; i <= elements.length; i++) {
      let sum = 0;
      for (let j = 0; j < elements.length; j++) {
        sum += elements[(j + i - 1) % elements.length]
        set.add(sum);
      }
    }
    return set.size;
}