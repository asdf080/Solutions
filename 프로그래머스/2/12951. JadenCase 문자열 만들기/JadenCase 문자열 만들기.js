function solution(s) {
    let arr = s.split(' ')
    let arr2 = [];
    for(let a of arr){
      if(a){
        let spl = a.split('').map(a => a = a.toLowerCase())
        spl[0] == '' ? '' : spl[0]=spl[0].toUpperCase()
        arr2.push(spl.join(''))
      } else arr2.push('')
    }
    return arr2.join(' ');
}