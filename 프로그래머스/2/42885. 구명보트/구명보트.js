function solution(people, limit) {
    let count = 0;
    people = people.sort((a, b) => a - b);
    while (people.length > 0) {
      let max = people.pop();
      if (max + people[0] <= limit) people.shift();
      count++;
    }
    return count
}