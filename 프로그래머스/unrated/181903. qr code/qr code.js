function solution(q, r, code) {
    return code.split('').filter((v,i) => i%q==r).join('');
}