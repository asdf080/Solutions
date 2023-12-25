function solution(x) {
    let a = [...String(x)].reduce((a,b) => a+Number(b),0)
    return x%a == 0;
}