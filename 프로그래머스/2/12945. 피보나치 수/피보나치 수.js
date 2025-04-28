function solution(n) {
    let arr = [0,1];
    for(let i=2;i<=n;i++){
        let num = arr[i-1]+arr[i-2]
        arr.push(num % 1234567)
    }
    return arr[arr.length-1] ;
}