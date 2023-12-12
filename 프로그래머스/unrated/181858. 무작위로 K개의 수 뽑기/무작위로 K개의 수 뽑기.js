function solution(arr, k) {
    let obj = new Set();
    for(let i = 0;i<arr.length;i++){
      if (obj.size == k) break;
      obj.add(arr[i])
    }

    let answer = [...obj]

    while(answer.length != k){
      answer.push(-1)
    }
    return answer;
}