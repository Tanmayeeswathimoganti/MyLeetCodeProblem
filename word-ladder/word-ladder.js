/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    if(beginWord == endWord || beginWord.length != endWord.length) {
        return 0
    }
    
    let wordListSet = new Set(wordList);
    let seen = new Set([beginWord]);
    let characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    let queue = [beginWord];
    let steps = 0;
    
    while(queue.length) {
        let currentLength = queue.length;
        let nextQueue = [];
        
        for(let i = 0; i < currentLength; i++) {
            let node = queue[i];
            
            if(node == endWord) {
                return steps + 1;
            }
            
            for(let char of characters) {
                for(let j = 0; j < beginWord.length; j++) {
                    let nextNode = node.slice(0, j) + char + node.slice(j+1);
                    if(wordListSet.has(nextNode) && !seen.has(nextNode)) {
                        seen.add(nextNode);
                        nextQueue.push(nextNode);
                    }
                }
            }
        }
        
        steps++;
        queue = nextQueue;
    }
    
    return 0;
};