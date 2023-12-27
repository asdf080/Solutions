function solution(t, p) {
    var answer = 0;
    for(let i=0;i<t.length-p.length+1;i++){
        Number(t.slice(i, i+p.length)) <= Number(p) ? answer++ :0
    }
    return answer;
}