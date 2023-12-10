function solution(common) {
    var answer = 0;
    if(common[1] - common[0] == common[2] - common[1]){
      answer = common[common.length-1]+(common[1] - common[0])
    } else {
      let a = common[2]/common[1]
      answer = common[0] * (a**(common.length))
    }
    return answer;
}