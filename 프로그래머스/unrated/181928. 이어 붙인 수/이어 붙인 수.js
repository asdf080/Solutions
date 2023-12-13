function solution(num_list) {
    let a='', b ='';

    for(let i of num_list){
      i%2==1? a+=String(i) : b+=String(i)
    }
    
    return Number(a)+Number(b)
}