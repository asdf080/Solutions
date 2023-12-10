function solution(score) {
    let arr = [];
    for(let a of score){
      arr.push((a[0]+a[1])/2)
    }

    let answer = new Array(arr.length).fill(1)

    for(let i = 0;i<arr.length;i++){
      for(let j = 0;j<arr.length;j++){
        arr[i] < arr[j] ? answer[i]++ : 0;
      }
    }
    return answer;
}