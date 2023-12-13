function solution(numLog) {
    var answer = [];
    for(let i=1;i<numLog.length;i++){
      numLog[i] == numLog[i-1]+1? answer.push('w'):false;
      numLog[i] == numLog[i-1]-1? answer.push('s'):false;
      numLog[i] == numLog[i-1]+10? answer.push('d'):false;
      numLog[i] == numLog[i-1]-10? answer.push('a'):false;
    }
    return answer.join('');
}