/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} restricted
 * @return {number}
 */
var reachableNodes = function(n, edges, restricted) {
    
    let dfs = (node) => {
      for(let neighbor of graph.get(node)) {
          if(restricted.indexOf(neighbor) == -1 && !seen.has(neighbor)) {
              seen.add(neighbor);
              dfs(neighbor);
          }
      }
    };
    
    let graph = new Map();
    let seen = new Set([0]);
    
    for(let i = 0; i < n; i++) {
        graph.set(i, []);
    }
    
    for(let [x, y] of edges) {
        graph.get(x).push(y);
        graph.get(y).push(x);
    }
    
    dfs(0);
    
    return seen.size;
};