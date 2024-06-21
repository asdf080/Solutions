let [a, ...inp] = require("fs").readFileSync(0, "utf8").trim().split("\n");
a = a.split(" ").map(Number);
inp = inp.map((i) => i.split(" ").map(Number));
let graph = Array.from({ length: a[0] + 1 }, () => []);

for (let i = 0; i < inp.length; i++) {
  graph[inp[i][0]].push(inp[i][1]);
  graph[inp[i][1]].push(inp[i][0]);
}
graph.map((g) => g.sort((a, b) => a - b));

function dfs(start, visit = new Set()) {
  visit.add(start);
  for (let s of graph[start]) {
    if (!visit.has(s)) dfs(s, visit);
  }

  return visit;
}

function bfs(start) {
  let visit = new Set();
  let queue = [start];

  while (queue.length > 0) {
    let node = queue.shift();

    if (!visit.has(node)) {
      visit.add(node);
      for (let neighbor of graph[node]) {
        if (!visit.has(neighbor)) {
          queue.push(neighbor);
        }
      }
    }
  }

  return visit;
}
console.log([...dfs(a[2])].join(" "));
console.log([...bfs(a[2])].join(" "));
