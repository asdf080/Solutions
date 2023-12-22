function solution(num_list) {
    var answer = 0;
    for(let a of num_list){
        while(a != 1){
            if(a%2==0){
                a/=2;
                answer++;
            } else {
                a = (a-1)/2;
                answer++;
            }
        }
    }
    return answer;
}