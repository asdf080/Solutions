function solution(arr) {
    if(arr[0].length < arr.length){
      while(arr[0].length != arr.length){
        for(let a of arr) a.push(0)
      }
    } else if (arr[0].length > arr.length){
      while(arr[0].length != arr.length){
        arr.push(Array(arr[0].length).fill(0))
      }
    } 
    return arr;
}