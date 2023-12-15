function solution(my_string, queries) {
    let arr = my_string.split('')
    for(let i = 0;i<queries.length;i++){
      let a = arr.slice(queries[i][0], queries[i][1]+1).reverse()
      let k = 0;
        for(let j = queries[i][0];j<=queries[i][1];j++){
          arr[j] = a[k++]
        }
    }
    return arr.join('');
}