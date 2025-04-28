function solution(n) {
    var one = n.toString(2).replaceAll("0", "").length
    var answer = n+1;
    while(true){
        if(answer.toString(2).replaceAll("0", "").length === one) break;
        answer++
    }
    return answer;
}