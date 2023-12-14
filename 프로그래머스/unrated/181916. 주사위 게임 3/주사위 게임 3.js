function solution(a, b, c, d) {
  let arr = [a, b, c, d].sort((x, y) => x - y);
  let set = new Set(arr);

  if(set.size === 1) return 1111 * a;
  if(set.size === 4) return arr[0];

  if(set.size === 3) {
    for(let i = 0; i < 3; i++) {
      if(arr[i] === arr[i + 1]) {
        return arr[0] * arr[1] * arr[2] * arr[3] / (arr[i] * arr[i]);
      }
    }
  }

  if(set.size === 2) {
    if(arr[1] === arr[2]) {
      return arr[1] === arr[0] ? (10 * arr[0] + arr[3]) ** 2 
                               : (10 * arr[3] + arr[0]) ** 2;
    } else {
      return (arr[0] + arr[3]) * Math.abs(arr[0] - arr[3]);
    }
  }
}