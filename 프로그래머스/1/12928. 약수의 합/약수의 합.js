function solution(n) {
    var answer = 0, num = 0;
    while(num<=n){
        if(n%num==0) answer += num;
        num++
    }
    return answer;
}