function solution(x, n) {
    var answer = [];
    if(x>0){
        for(let i=x;i<(x*n)+1;i+=x){
            answer.push(i)
        }
    } if(x<0) {
        for(let i=x;i>(x*n)-1;i+=x){
            answer.push(i)
        }
    } if(x==0) {
        while(true){
            let i = x;
            answer.push(i);
            if(answer.length == n) break;
        }
    }
    return answer;
}