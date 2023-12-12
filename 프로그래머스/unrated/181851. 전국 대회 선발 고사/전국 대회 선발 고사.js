function solution(rank, attendance) {
    var answer = 0;
    let arr = [];
    for(let i = 0;i<rank.length;i++){
        attendance[i] ? arr.push(rank[i]):false
    }
    arr.sort((a,b) => a-b)
    return 10000*rank.indexOf(arr[0])+100*rank.indexOf(arr[1])+rank.indexOf(arr[2]);
}