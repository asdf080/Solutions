function solution(k, tangerine) {
    var answer = 0;
    let obj = {};
    tangerine.map((t) => {
      if (obj[t]) obj[t] += 1;
      else obj[t] = 1;
    });

    let sor = Object.entries(obj).sort(([, a], [, b]) => b - a);
    for (let a of sor) {
      answer++;
      if (k - a[1] <= 0) break;
      else k -= a[1];
    }
    return answer;
}