function solution(a, b) {
    const day = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
    const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    for (let i = 0; i < a - 1; i++) {
      b += month[i];
    }

    return day[(b - 1) % 7];
}