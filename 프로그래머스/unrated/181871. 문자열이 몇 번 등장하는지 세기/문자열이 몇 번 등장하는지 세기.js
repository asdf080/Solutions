function solution(myString, pat) {
    let count = 0;
    for (let i = 0; i < myString.length; i++) {
      myString.slice(i, i + pat.length) == pat ? count++ : 0;
    }
    return count;
}