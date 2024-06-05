function solution(priorities, location) {
    var answer = 0;
    const arr = priorities.map((pr, idx) => {
      return { pr, idx };
    });

    while (arr.length) {
      const qu = arr.shift();
      if (arr.some((a) => a.pr > qu.pr)) arr.push(qu);
      else {
        ++answer;
        if (qu.idx === location) break;
      }
    }
    return answer;
}