function solution(arr, divisor) {
    return arr.filter(a=> a%divisor==0).length == 0 ? [-1] : arr.filter(a=> a%divisor==0).sort((a,b) => a-b);
}