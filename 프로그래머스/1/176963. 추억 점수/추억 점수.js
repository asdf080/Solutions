function solution(name, yearning, photo) {
    var answer = [];
    photo.map((ph) => {
      let num = 0;
      ph.map((p) => {
        num += yearning[name.indexOf(p)] ?? 0;
      });
      answer.push(num);
    });
    return answer;
}