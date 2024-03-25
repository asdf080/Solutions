function solution(name, yearning, photo) {
    var answer = [];
    let obj = {};
    name.map((n, i) => (obj[n] = yearning[i]));
    console.log(obj);
    photo.map((ph) => {
      let num = 0;
      ph.map((p) => {
        if (name.includes(p)) num += obj[p];
      });
      answer.push(num);
    });
    return answer;
}