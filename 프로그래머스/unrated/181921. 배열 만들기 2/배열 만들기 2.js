function solution(l, r) {
    var answer = [];
    while(l <= r){
      if (!(/[1-4]/.test(String(l)) || /[6-9]/.test(String(l)))) answer.push(l++);
      l++
    }
    return answer.length<1 ? [-1] : answer;
}