function solution(s){
    let countP = 0, countY = 0;
    s.split('').forEach(a => {
        if(a == 'p' || a == 'P') countP++;
        if(a == 'y' || a == 'Y') countY++;
    })
    return countP == countY ? true : false;
}