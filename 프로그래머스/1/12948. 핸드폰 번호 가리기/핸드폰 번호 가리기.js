function solution(phone_number) {
    let star = ""
    while(star.length != phone_number.slice(0,phone_number.length-4).length) star += "*"
    return star+phone_number.slice(-4);
}