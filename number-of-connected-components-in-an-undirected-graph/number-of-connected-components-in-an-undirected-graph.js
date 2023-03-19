/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    
    let dfs = (node) => {
      for(let neighbor of graph.get(node)) {
          if(!seen[neighbor]) {
              seen[neighbor] = true;
              dfs(neighbor);
          }
      }
    };
    
    let graph = new Map();
    let seen = new Array(n).fill(false);
    
    for(let i = 0; i < n; i++) {
        graph.set(i, []);
    }
    
    for(let [x, y] of edges) {
        graph.get(x).push(y);
        graph.get(y).push(x);
    }
    
    let componentCount = 0;
    
    for(let i = 0; i < n; i++) {
        if(!seen[i]) {
            componentCount++;
            dfs(i);
        }
    }
    
    return componentCount;
};