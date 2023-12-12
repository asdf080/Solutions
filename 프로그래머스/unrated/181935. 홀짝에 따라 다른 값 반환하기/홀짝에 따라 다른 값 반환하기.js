function solution(n) {
    let answer = 0;
    for(let a = 0;a<=n;a++){
        if(n%2==1) {
            if(a%2==1) answer += a
    } else {
        if(a%2==0) answer += a**2
    }
    }
    return answer;
}