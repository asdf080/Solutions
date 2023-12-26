function solution(absolutes, signs) {
    var answer = 0;
    absolutes.forEach((v,i) => signs[i] ? answer += v : answer -= v)
    return answer;
}