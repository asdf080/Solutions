function solution(want, number, discount) {
    var answer = 0;
    for (let i = 10; i <= discount.length; i++) {
  let arr = discount.slice(i - 10, i).sort();
  let count = 0;
  for (let j = 0; j < want.length; j++) {
    if (arr.includes(want[j])) {
      if (arr.lastIndexOf(want[j]) - arr.indexOf(want[j]) + 1 >= number[j]) {
        count++;
      }
    } else {
      count = 0;
      break;
        }
      }
      if (count == want.length) answer++;
    }
    return answer;
}