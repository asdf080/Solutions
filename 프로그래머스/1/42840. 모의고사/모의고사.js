function solution(answers) {
    let num1 = [1, 2, 3, 4, 5];
    let num2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let num3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    let arr1 = num1
      .join("")
      .repeat(Math.ceil(answers.length / num1.length))
      .split("")
      .map(Number);
    let arr2 = num2
      .join("")
      .repeat(Math.ceil(answers.length / num2.length))
      .split("")
      .map(Number);
    let arr3 = num3
      .join("")
      .repeat(Math.ceil(answers.length / num3.length))
      .split("")
      .map(Number);

    const ans = [0, 0, 0];
    arr1.map((a, idx) => a === answers[idx] && ans[0]++);
    arr2.map((a, idx) => a === answers[idx] && ans[1]++);
    arr3.map((a, idx) => a === answers[idx] && ans[2]++);

    const result = [];
    ans.map((a, i) => a === Math.max(...ans) && result.push(i + 1));
    return result;
}