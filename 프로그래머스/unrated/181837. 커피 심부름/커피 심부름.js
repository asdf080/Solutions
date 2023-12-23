function solution(order) {
    var answer = 0;
    order.forEach(a => {
  switch (a) {
    case "iceamericano": answer += 4500
      break;
    case "americanoice": answer += 4500
      break;
    case "hotamericano": answer += 4500
      break;
    case "americanohot": answer += 4500
      break;
    case "americano": answer += 4500
      break;
    case "anything": answer += 4500
      break;
    case "icecafelatte": answer += 5000
      break;
    case "cafelatteice": answer += 5000
      break;
    case "hotcafelatte": answer += 5000
      break;
    case "cafelattehot": answer += 5000
      break;
    case "cafelatte": answer += 5000
      break;
  }
})
    return answer;
}