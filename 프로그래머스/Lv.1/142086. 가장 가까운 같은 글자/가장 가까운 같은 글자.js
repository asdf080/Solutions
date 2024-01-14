function solution(s) {
    let arr = s.split('')
    let answer = Array(s.length).fill(-1);

    for(let i=1;i<arr.length;i++){
      for(let j=1;j<=i;j++){
        if(arr[i] == arr[i-j]){
          answer[i] = j;
          break;
        }
      }
    }
    return answer
}