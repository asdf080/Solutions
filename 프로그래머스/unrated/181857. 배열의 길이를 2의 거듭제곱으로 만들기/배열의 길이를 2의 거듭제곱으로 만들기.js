function solution(arr) {
    let num = 0;
    let le = arr.length

    while(2**num < le) num++

    for(let i=0;i<2**num-le;i++){
      arr.push(0)
    }
    return arr;
}