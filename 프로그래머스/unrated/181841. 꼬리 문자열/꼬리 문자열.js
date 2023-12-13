function solution(str_list, ex) {
    var answer = [];
    for(let a of str_list){
      a.includes(ex) ? 0:answer.push(a)
    }
    return answer.join('');
}