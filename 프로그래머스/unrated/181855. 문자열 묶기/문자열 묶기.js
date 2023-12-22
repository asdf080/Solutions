function solution(strArr) {
    let obj = {}
    strArr.forEach(a => {
      const leng = a.length;
      obj[leng] = obj[leng] || []
      obj[leng].push(a)
    })
    let arr = Object.values(obj).map(a => a.length)
    return Math.max(...arr);
}