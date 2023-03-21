/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {   
    let seen = new Set([start]);
    let queue = [start];
    
    while(queue.length) {
        let currentLength = queue.length;
        let nextQueue = [];
        
        for(let i = 0; i < currentLength; i++) {
            let node = queue[i];
            let leftIndex = node - arr[node];
            let rightIndex = node + arr[node];
            
            if(arr[node] == 0) {
                return true;
            }
            
            if(leftIndex >= 0) { 
                if(!seen.has(leftIndex)) {
                    seen.add(leftIndex);
                    nextQueue.push(leftIndex);
                }
            }
            
            if(rightIndex <= arr.length - 1) {
                if(!seen.has(rightIndex)) {
                    seen.add(rightIndex);
                    nextQueue.push(rightIndex);
                }
            }
        }
        
        queue = nextQueue;
    }
    
    return false;
};