function solution(my_string, s, e) {
    let arr = my_string.split('')
    let rev = arr.slice(s,e+1).reverse()
    let a = 0
    for(let i=s;i<=e;i++){
      arr[i] = rev[a++]
    }

    return arr.join('');
}