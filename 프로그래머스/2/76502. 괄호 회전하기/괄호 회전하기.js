function solution(s) {
  var answer = 0;
  s = s.split("");
  for (let j = 0; j < s.length; j++) {
    const stack = [];
    let bool = true;
    for (let i = 0; i < s.length; i++) {
      const index = (i + j) % s.length;
      if ("([{".includes(s[index])) {
        stack.push(s[index]);
      } else {
        if (stack.length === 0 || stack.pop() !== "([{"[")]}".indexOf(s[index])]) {
          bool = false;
          break;
        }
      }
    }

    if (bool && stack.length === 0) {
      answer++;
    }
  }

  return answer;
}