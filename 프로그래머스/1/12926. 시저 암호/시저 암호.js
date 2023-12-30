function solution(s, n) {
    var sArr= s.split('');
    let alp = Array(52).fill().map((_, i) => {
        if(i<26){
            return String.fromCharCode(i + 97)
        } else {
        return String.fromCharCode(i-26 + 65)
        }
    });
    
    return sArr.map(v => {
        for(let i=0;i<alp.length;i++){
            if(v == alp[i]){
                if((v == v.toLowerCase()) && (i+n > 25)) return alp[i-26+n]
                if(i+n > 51) return alp[i-26+n]
                else return alp[i+n]
            }
            else if(v == ' ') return ' '
        }
    }).join('');
}