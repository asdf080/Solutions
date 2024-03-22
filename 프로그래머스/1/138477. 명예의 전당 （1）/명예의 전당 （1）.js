function solution(k, score) {
    let answer = [];
    let arr = [];
    for (let i = 0; i < score.length; i++) {
      if (arr.length < k) {
        arr.push(score[i]);
      } else {
        if (Math.min(...arr) < score[i]) {
          arr[arr.indexOf(Math.min(...arr))] = score[i];
        }
      }
      answer.push(Math.min(...arr));
    }
    return answer;
}