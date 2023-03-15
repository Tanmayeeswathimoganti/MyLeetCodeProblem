/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    let ans = [];
    let queue = [root];
    
    if(!root) {
        return [];
    }
    let reverse = false;
    
    while(queue.length) {
        let currLevelLength = queue.length;
        let nextQueue = [];
        let tempAns = [];
        
        for(let i = 0; i < currLevelLength; i++) {
            let node = queue[i];
            tempAns.push(queue[i].val);
            
            if(node.left) {
                nextQueue.push(node.left);
            }
            
            if(node.right) {
                nextQueue.push(node.right);
            }
        }
        
        if(reverse) {
          tempAns.reverse();
        }
        reverse = !reverse;
        ans.push(tempAns);
        queue = nextQueue;
    }
    
    return ans;
};