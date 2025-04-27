function solution(s) {
    let num = 0;
    let zero = 0;
    while(s!=="1"){
        let leng1 = s.length
        s = s.replaceAll("0", "")
        let leng2 = s.length
        zero += leng1 - leng2
        s = leng2.toString(2)
        num++
    }
    return [num, zero];
}