/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let maxArea = 0;
    let temp = 0;
    
    let valid = (row, col) => {
      return 0 <= row && 0 <= col && row < rowLength && col < colLength && grid[row][col] == 1;
    };
    
    let dfs = (row, col) => {
        for(let [dx, dy] of directions) {
            let nextRow = row + dy, nextCol = col + dx;
            
            if(valid(nextRow, nextCol) && !seen[nextRow][nextCol]) {
                temp++;
                seen[nextRow][nextCol] = true;
                dfs(nextRow, nextCol);
            }
        }
        
        if(temp > maxArea) {
            maxArea = temp;
        }
    };
    
    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let rowLength = grid.length;
    let colLength = grid[0].length;
    let seen = [];
    
    for(let i = 0; i < rowLength; i++) {
        seen.push(new Array(colLength).fill(false));
    }
    
    for(let row = 0; row < rowLength; row++) {
        for(let col = 0; col < colLength; col++) {
            if(grid[row][col] == 1 && !seen[row][col]) {
                temp = 1;
                seen[row][col] = true;
                dfs(row, col);
            }
        }
    }
    
    return maxArea;
};