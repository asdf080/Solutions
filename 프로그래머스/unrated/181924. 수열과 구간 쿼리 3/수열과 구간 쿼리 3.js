function solution(arr, queries) {
    let tmp = 0;
    for(let a of queries){
      tmp = arr[a[0]];
      arr[a[0]] = arr[a[1]];
      arr[a[1]] = tmp;
    }
    return arr;
}