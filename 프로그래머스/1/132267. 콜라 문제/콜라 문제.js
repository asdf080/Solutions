function solution(a, b, n) {
    let count = 0, lest = 0;
    function f(a, b, n, count, lest) {
      while (n > 0) {
        lest += n % a;
        n = Math.floor(n / a) * b;
        count += n;
      }
      if (lest >= a) {
        n = lest;
        lest = 0;
        return f(a, b, n, count, lest);
      }
      return count;
    }
    return f(a, b, n, count, lest)
}