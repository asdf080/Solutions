let [a, b, ...inp] = require("fs").readFileSync(0, "utf8").trim().split("\n"),
  graph = Array.from({ length: ++a }, () => []);
inp = inp.map((ip) => ip.split(" ").map(Number));

for (let i = 0; i < b; i++) {
  graph[inp[i][0]].push(inp[i][1]);
  graph[inp[i][1]].push(inp[i][0]);
}

function dfs(start, visit = new Set()) {
  visit.add(start);
  for (let a of graph[start]) {
    if (!visit.has(a)) dfs(a, visit);
  }
  return visit;
}

console.log(dfs(1).size - 1);
