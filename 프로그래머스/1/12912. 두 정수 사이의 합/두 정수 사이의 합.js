function solution(a, b) {
    var answer = 0;
    if(a<b) {
        while(a <= b) answer += a++
        return answer;
    }
    if(a>b) {
        while(a >= b) answer += a--
        return answer;
    }
    if(a==b) return a
}