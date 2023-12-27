function solution(s) {
    var answer = '', count = 0;
    for (let i of s) {
        if (i === ' ') {
            answer += i;
            count = 0;
        } else {
            count % 2 == 0 ? answer += i.toUpperCase() : answer += i.toLowerCase();
            count++;
        }
    }
    return answer;
}
