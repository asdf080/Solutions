function solution(picture, k) {
    let z = [];

    for(let i = 0;i<picture.length;i++){
    let a = [];
      for(let j =0;j<picture[i].length;j++){
        let b = 0;
        if(picture[i][j] == 'x'){
          while(b != k){
            a.push('x')
            b++
          }
        } else {
          while(b != k){
            a.push('.')
            b++
        }
      }
    }
      let c=0;
      while(c != k) {
        z.push(a.join(''))
        c++
      } 
    }
    return z;
}