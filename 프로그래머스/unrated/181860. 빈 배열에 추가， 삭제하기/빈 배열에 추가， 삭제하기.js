function solution(arr, flag) {
    var answer = [];
    for(let i=0;i<arr.length;i++){
        if(flag[i]){
         let count = 0;
            while(count != arr[i]*2){
             answer.push(arr[i])
                count++
            }
        } else {
            answer.splice(answer.length-arr[i], arr[i])
        }
    }
    return answer;
}