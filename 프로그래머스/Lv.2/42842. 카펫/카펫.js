function solution(brown, yellow) {
    let arr = [];

    for(let i=1;i<brown;i++){
      if((brown+yellow)%i==0){
        arr.push([(brown+yellow)/i,i])
      }
      if((brown+yellow)/i <= i) break;
    }
    return arr.filter(([a,b]) => (a*2)+(b*2)-4 == brown && a>=b).flat()
}