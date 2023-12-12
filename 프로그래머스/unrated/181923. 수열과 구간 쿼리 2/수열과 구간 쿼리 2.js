function solution(arr, queries) {
    var answer = [];
    
    for(let h = 0;h<queries.length;h++){
      let arr2 = [];
    for(let i = queries[h][0];i<=queries[h][1];i++){
      if(queries[h][2] < arr[i]){
        arr2.push(arr[i])
      }
    }
    arr2.length>0? answer.push(Math.min(...arr2)):answer.push(-1)
    }

    return answer;
}