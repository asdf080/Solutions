function solution(arr1, arr2) {
    var answer = [];
    arr1.map((arr) => {
      let nums = [];
      for (let i = 0; i < arr2[0].length; i++) {
        let sum = 0;
        for (let j = 0; j < arr.length; j++) {
          sum += arr[j] * arr2[j][i];
        }
        nums.push(sum);
      }
      answer.push(nums);
    });
    return answer;
}