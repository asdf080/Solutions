function solution(n) {
    return Number([...String(n)].map(a => Number(a)).sort((a,b) => b-a).join(''));
}