function solution(s) {
    var answer = [];
    const set = new Set();
    JSON.parse(s.replace(/{/g, "[").replace(/}/g, "]"))
      .sort((a, b) => a.length - b.length)
      .flat()
      .forEach((a) => set.add(a));
    set.forEach((s) => answer.push(s));
    return answer;
}