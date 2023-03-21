/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(startGene, endGene, bank) {
    let bankSet = new Set(bank);
    let queue = [startGene];
    let steps = 0;
    let characters = ['A', 'C', 'G', 'T'];
    let seen = new Set([startGene]);
    
    while(queue.length) {
        let currentLength = queue.length;
        let nextQueue = [];
        
        for(let i = 0; i < currentLength; i++) {
            let node = queue[i];
            
            if(node == endGene) {
                return steps;
            }
            
        for(let char of characters) {
            for(let j = 0; j < startGene.length; j++) {
                let tempNode = node.slice(0, j) + char + node.slice(j + 1); 
                if(!seen.has(tempNode) && bankSet.has(tempNode)) {
                    nextQueue.push(tempNode);
                    seen.add(tempNode);
                }
            }
        }
        }
        
        queue = nextQueue;
        steps++;
    }
    
    return -1;
};