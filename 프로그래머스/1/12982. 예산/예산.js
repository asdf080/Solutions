function solution(d, budget) {
    var answer = 0, sum = 0;
    d.sort((a,b) => a-b).forEach(v => {
        if(sum+v <= budget){
            sum += v;
            answer++;
        }
    })
    return answer;
}