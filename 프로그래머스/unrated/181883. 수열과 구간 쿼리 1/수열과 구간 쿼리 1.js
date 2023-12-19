function solution(arr, queries) {
    for(let i = 0;i<queries.length;i++){
       arr = arr.map((a,b)=> queries[i][0] <= b && b <= queries[i][1] ? a+1:a)
    }
    return arr;
}