let [a, b, ...inp] = require("fs").readFileSync(0, "utf8").trim().split("\n"),
  graph = Array.from({ length: ++a }, () => []),
  visit = Array(++a).fill(0);
inp = inp.map((ip) => ip.split(" ").map(Number));
visit[1] = 1;

for (let i = 0; i < b; i++) {
  graph[inp[i][0]].push(inp[i][1]);
  graph[inp[i][1]].push(inp[i][0]);
}

function dfs(pa) {
  for (let a of graph[pa]) {
    if (visit[a] === 0) {
      visit[a] = 1;
      dfs(a);
    }
  }
}

dfs(1);
console.log(visit.filter((v) => v).length - 1);
