function solution(num) {
    var answer = 0;
    while(num != 1){
        if(num%2==0) {
            num /= 2;
            answer++
        }
        else {
            num = num*3+1
            answer++
        }
    }
    return answer > 500 ? -1 : answer;
}