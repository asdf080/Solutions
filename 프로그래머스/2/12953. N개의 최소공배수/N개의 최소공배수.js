const gcd = (a, b) => (b ? gcd(b, a % b) : a); //공약수
const lcm = (a, b) => (a * b) / gcd(a, b); //공배수

function solution(arr) {
    var answer = 1;
    for (let i = 0; i < arr.length; i++) {
      answer = lcm(answer, arr[i]);
    }
    return answer;
}