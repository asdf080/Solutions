function solution(my_string) {
    var answer = new Array(52).fill(0)
    let alp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
    for(let a of my_string.split('').map(v => alp.indexOf(v))){
      answer[a] += 1
    }
    return answer;
}