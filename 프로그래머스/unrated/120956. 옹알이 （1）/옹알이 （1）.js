function solution(babbling) {
    let a = ["aya", "ye", "woo", "ma"]
    var answer = 0;
    
    for(let i in babbling){
        if(babbling[i].split(a[0]).join('x').split(a[1]).join('x').split(a[2]).join('x').split(a[3]).join('x').split('x').join('') == '') answer++;
    }
    
    return answer;
}