function solution(chicken) {
    let arr = []

    while(chicken > 9){
      arr.push(Math.floor(chicken/10))
      chicken = Math.floor(chicken/10)+chicken%10
    }
    return arr.reduce((a,b)=>a+b, 0)
}