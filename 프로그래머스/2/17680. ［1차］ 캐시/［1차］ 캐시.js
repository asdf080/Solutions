function solution(cacheSize, cities) {
    let arr = [];
    let time = 0;

    cities.map((city) => {
      if (arr.includes(city.toLowerCase())) {
        time++;
        arr.splice(arr.indexOf(city.toLowerCase()), 1);
        arr.push(city.toLowerCase());
      } else {
        time += 5;
        arr.push(city.toLowerCase());
        if (arr.length > cacheSize) arr.shift();
      }
    });
    return time;
}