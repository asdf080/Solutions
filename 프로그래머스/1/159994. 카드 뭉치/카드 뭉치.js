function solution(cards1, cards2, goal) {
    let c1 = [], c2 = [];
    goal.forEach(g => {
      if (cards1.includes(g)) {
        c1.push(cards1.indexOf(g));
      } else c2.push(cards2.indexOf(g));
    });
    
    return c1.every((c, index) => c === index) && c2.every((c, index) => c === index) ? "Yes" : "No"
}