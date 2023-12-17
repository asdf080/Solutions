function solution(my_string, indices) {
    var answer = my_string.split('')

    for(let i = 0;i<answer.length;i++){
      for(let j of indices){
        i == j ? answer[i]='':0
      }
    }
    return answer.join('');
}