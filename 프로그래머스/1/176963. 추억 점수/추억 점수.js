function solution(name, yearning, photo) {
    var answer = [];
    photo.map((ph) => {
      let num = 0;
      ph.map((p) => {
        if (name.includes(p)) num += yearning[name.indexOf(p)];
      });
      answer.push(num);
    });
    return answer;
}