function solution(s) {
    return s.search(/[a-z]/gi) == -1 && (s.length==4 || s.length==6) ;
}