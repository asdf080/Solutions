function solution(number) {
    return number.split('').reduce((a,b)=> a+1*b,0)%9
}