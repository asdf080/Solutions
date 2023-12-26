function solution(s) {
    let a = s.split(' ').map(v => Number(v))
    return `${Math.min(...a)} ${Math.max(...a)}`;
}