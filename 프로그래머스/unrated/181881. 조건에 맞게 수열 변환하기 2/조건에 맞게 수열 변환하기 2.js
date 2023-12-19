function solution(arr) {
    var answer = 0;
    while(true){
        let arr2 = arr.map(a => {
            if(a >= 50 && a%2 ==0) return a/2
            if(a < 50 && a%2 ==1) return (a*2)+1
            return a
            })
        const equals = (a, b) => a.every((v, i) => v === b[i]); 
        if (equals(arr,arr2)) break;
    arr = arr2
    answer++
    }
    return answer;
}