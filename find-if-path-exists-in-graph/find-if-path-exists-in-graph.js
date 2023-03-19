/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    if(n == 1) {
        return true;
    }
    
    let dfs = (start) => {
        let stack = [start];
        let found = false;
        while(stack.length) {
            let node = stack.pop();
            
            for(let neighbor of graph.get(node)) {
                if(neighbor == destination) {
                   found = true;
                    break;
                }
                
                if(!seen[neighbor]) {
                    seen[neighbor] = true;
                    stack.push(neighbor);
                }
            }
        }
        
        return found;
    }
    
    let graph = new Map();
    let seen = new Array(n).fill(false);
    
    for(let i = 0; i < n; i++) {
        graph.set(i, []);
    }
    
    for(let [x, y] of edges) {
        graph.get(x).push(y);
        graph.get(y).push(x);
    }
    
    seen[source] = true;
    
    return dfs(source);
};