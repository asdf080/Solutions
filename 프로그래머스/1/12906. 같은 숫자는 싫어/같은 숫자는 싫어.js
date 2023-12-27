function solution(arr){
    let arr2 = arr.filter((v,i) => v != arr[i+1])
    return arr2
}