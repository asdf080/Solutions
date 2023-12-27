function solution(n) {
    var count1 = [...n.toString(2)].filter(v => v === '1').length;
    var nPlus = n + 1;

    while (true) {
        var count2 = [...nPlus.toString(2)].filter(v => v === '1').length;
        if (count1 === count2) {
            return nPlus;
        }
        nPlus++;
    }
}
