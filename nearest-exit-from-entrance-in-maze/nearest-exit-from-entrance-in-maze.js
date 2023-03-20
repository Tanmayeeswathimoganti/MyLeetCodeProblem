/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
    let rowLength = maze.length;
    let colLength = maze[0].length;
    let seen = [];
    
    for(let row = 0; row < rowLength; row++) {
        seen.push(new Array(colLength).fill(false));
    }
    
    let valid = (row, col) => {
      return 0 <= row && 0 <= col && row < rowLength && col < colLength && maze[row][col] == ".";
    };
    
    for(let row = 0; row < rowLength; row++) {
        for(let col = 0; col < colLength; col++) {
            if(maze[row][col] == '+') {
                seen[row][col] = true;
            }
        }
    }
    
    let queue = [entrance];
    seen[entrance[0]][entrance[1]] = true;
    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let steps = 0;
    
    while(queue.length) {
        let currentLength = queue.length;
        let nextQueue = [];
        
        for(let i = 0; i < currentLength; i++) {
            let [row, col] = queue[i];
            
            for(let [dx, dy] of directions) {
                let nextRow = row + dy, nextCol = col + dx;
                
                if(valid(nextRow, nextCol)) {
                    if(!seen[nextRow][nextCol]) {
                        seen[nextRow][nextCol] = true;
                        nextQueue.push([nextRow, nextCol]);
                    }
                }else {
                    console.log("nextRow & nextCol", nextRow, nextCol);
                    console.log("steps", steps);
                    
                    if((0 > nextRow || 0 > nextCol || nextRow >= rowLength || nextCol >= colLength) && (row != entrance[0] || col != entrance[1])) {
                        if(steps > 0) {
                            return steps;
                        }
                    }
                }
            }
        }
        
        queue = nextQueue;
        steps++;
    }
    
    return -1;
};