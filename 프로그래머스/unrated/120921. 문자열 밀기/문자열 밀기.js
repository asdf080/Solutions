function solution(A, B) {
  var answer = 0;
  let arr = [...A]
  if(A == B) answer;
  else{
    while(arr.join('') != B){
      arr.unshift(arr.pop())
      answer++;
      if(answer > A.length) {
        answer = -1
        break;
      }
    }
  }
  return answer;
}