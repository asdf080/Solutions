function solution(myStr) {
    var answer = myStr.split(/[a|b|c]/g).filter((a) => a);
    return answer.length ? answer:["EMPTY"];
}