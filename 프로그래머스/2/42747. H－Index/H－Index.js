function solution(citations) {
    var answer = 0;
   for (let i = 0; i <= citations.length; i++) {
      if (citations.filter((c) => c >= i).length == i) {
        answer = i;
        break;
      } else if (citations.filter((c) => c >= i).length < i) {
        answer = Math.min(citations.filter((c) => c >= i - 1).length, i - 1);
        break;
      }
    }

    return answer;
}