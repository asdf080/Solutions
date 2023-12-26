function solution(arr) {
    let min = Math.min(...arr)
    return arr.filter(a => a != min).length > 0 ? arr.filter(a => a != Math.min(...arr)) : [-1]
}