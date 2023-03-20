/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestDistance = function(grid) {
    let rowLength = grid.length;
    let colLength = grid[0].length;
    
    if(rowLength == 1 && colLength == 1) {
        return -1;
    }
    
    let queue = [];
    let tracking = [];
    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    
    for(let row = 0; row < rowLength; row++) {
        tracking[row] = [...grid[row]];
    }
    
    for(let row = 0; row < rowLength; row++) {
        for(let col = 0; col < colLength; col++) {
            let temp = grid[row][col];
            if(temp == 0) {
               tracking[row][col] = [];
            }else {
               tracking[row][col] = temp;
                if(temp == 1) {
                    queue.push([row, col]);
                }
            }
        }
    }
    
    let valid = (row, col) => {
      return 0 <= row && 0 <= col && row < rowLength && col < colLength && grid[row][col] == 0;
    };
    
    let convertToHash = (row, col) => {
        return row + ',' + col;
    };
    
    let bfs = (start, index) => {
        let steps = 0;
        let tempQueue = [[...start]];
        let seen = new Set();
        
        while(tempQueue.length) {
            let currentLength = tempQueue.length;
            let nextQueue = [];
            steps++;
            
            for(let i = 0; i < currentLength; i++) {
                let [row, col] = tempQueue[i];
                
                for(let [dx, dy] of directions) {
                    let nextRow = row + dy, nextCol = col + dx;
                    
                    if(valid(nextRow, nextCol)) {
                        if(!seen.has(convertToHash(nextRow, nextCol))) {
                            seen.add(convertToHash(nextRow, nextCol));
                            tracking[nextRow][nextCol].push(steps);
                            nextQueue.push([nextRow, nextCol]);
                        }
                    }
                }
            }
            
            tempQueue = nextQueue;
        }
    };
    
  for(let i = 0; i < queue.length; i++) {
        bfs(queue[i], i);
    }
    
    let minDistance = Infinity;
    for(let row = 0; row < rowLength; row++) {
        for(let col = 0; col < colLength; col++) {
            let temp = tracking[row][col];
            if(temp !== 1 && temp !== 2) {
                
                console.log("tracking.length", tracking[row][col].length);
                console.log("queue.length", queue.length);
                
                if(tracking[row][col].length == queue.length) {
                let distance = 0;
                for(let i = 0; i < temp.length; i++) {
                    distance += temp[i];
                }
                
                if(distance > 0 && distance < minDistance) {
                    minDistance = distance;
                }
                }
            }
        }
    }
    
    if(minDistance == Infinity) {
        return -1;
    }
    return minDistance;
};