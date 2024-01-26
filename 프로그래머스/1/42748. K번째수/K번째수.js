function solution(array, commands) {
    let an = [];
    commands.forEach(([i, j, k]) => {
      an.push(array.slice(i - 1, j).sort((a, b) => a - b)[k - 1]);
    });
    return an;
}