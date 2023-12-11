function solution(code) {
    let mode = 0;
    let answer = []
    let arr = code.split('');
    
    for(let i = 0;i<arr.length;i++){
      if(arr[i] == "1"){
        mode++;
        continue;
      }
      if(mode%2 == 0 && i%2==0) answer.push(arr[i])
      if(mode%2 == 1 && i%2==1) answer.push(arr[i])
    }
    return answer.join('') ? answer.join(''):'EMPTY';
}