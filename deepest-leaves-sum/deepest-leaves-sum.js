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
 * @return {number}
 */
var deepestLeavesSum = function(root) {
    if(!root) {
        return 0;
    }
    
    let queue = [root];
    let ans = root.val;
    
    while(queue.length) {
        let currLevelLength = queue.length;
        let nextQueue = [];
        
        for(let i = 0; i < currLevelLength; i++) {
            let node = queue[i];
            
            if(i == 0) {
                ans = node.val;
            }else {
                ans += node.val;
            }
            
            if(node.left) {
                nextQueue.push(node.left);
            }
            
            if(node.right) {
                nextQueue.push(node.right);
            }
        }
        
        queue = nextQueue;
    }
    
    return ans;
};