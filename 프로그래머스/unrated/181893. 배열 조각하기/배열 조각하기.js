function solution(arr, query) {
    query.map((v,i) =>{
      if(i%2 == 0){
        arr.splice(v+1)
      } else arr.splice(0, v)
    })

    return arr;
}