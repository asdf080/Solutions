function solution(clothes) {
    let obj = {}
    clothes.forEach(c =>  obj[c[1]] = obj[c[1]] ? obj[c[1]]+1 : 2)
    return Object.values(obj).reduce((a,b)=> a*b)-1
}