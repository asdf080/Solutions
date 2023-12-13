function solution(a, d, included) {
    var answer = 0;
    let arr = [];
    while(arr.length != included.length){
        arr.push(a);
        a += d
    }
    for(let i = 0;i<included.length;i++){
      included[i] == true ? answer += arr[i]:0
    }
    return answer;
}