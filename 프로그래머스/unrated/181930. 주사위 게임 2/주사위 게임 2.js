function solution(a, b, c) {
    if(a!=b && a!=c && b!=c) return a+b+c
    if(a==b && b==c) return (a*3)*(a**2*3)*(a**3*3)
    if(a==b || a==c || b==c) return (a+b+c)*(a**2+b**2+c**2)    
}