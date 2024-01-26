function solution(n, arr1, arr2) {
    let arr3 = Array(n).fill("");
    let arr4 = Array(n).fill("");
    let answer = Array(n).fill("");
    
    function num2(arrA, arrB) {
      arrA.forEach((v, i) => {
        let str = v.toString(2);
        if (str.length < n) {
          str = "0".repeat(n - str.length) + str;
        }
        arrB[i] += str;
      });
    }
    num2(arr1, arr3);
    num2(arr2, arr4);

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (+arr3[i][j] || +arr4[i][j]) {
          answer[i] += "#";
        } else answer[i] += " ";
      }
    }
    return answer;
}