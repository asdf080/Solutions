function solution(progresses, speeds) {
    const endDay = progresses.map((p, idx) => {
      let num = 1;
      while (true) {
        if (p + speeds[idx] * num >= 100) break;
        num++;
      }
      return num;
    });

    let arr = [];

    loop1: for (let i = 0; i < endDay.length; i++) {
      if (endDay[i] === undefined) continue loop1;
      arr.push(1);
      for (let j = i + 1; j < endDay.length; j++) {
        if (endDay[i] < endDay[j]) {
          continue loop1;
        } else {
          endDay[j] = undefined;
          arr[arr.length - 1] += 1;
        }
      }
    }
    return arr;
}