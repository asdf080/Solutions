function solution(s) {
    if(s == 1) return [0,0]
    let num1 = 0, num2 = 0;
    while(s != 1) {
        let arr = s.split('')
        for(let i = 0;i<arr.length;i++){
          if(arr[i] == '0'){
            arr[i] = '';
            num2++;
          }
        }
        s = arr.join('').length.toString(2)
        num1++
        if(s == 1) return [num1, num2]
    }
}