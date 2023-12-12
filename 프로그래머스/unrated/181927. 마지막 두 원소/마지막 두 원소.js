function solution(num_list) {
    let a = 0;
    if(num_list[num_list.length-1] > num_list[num_list.length-2]){
        a = num_list[num_list.length-1] - num_list[num_list.length-2]
    } else {
        a = num_list[num_list.length-1]*2
    }
    num_list.push(a)
    return num_list;
}