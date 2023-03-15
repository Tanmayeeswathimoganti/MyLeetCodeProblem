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
var diameterOfBinaryTree = function(root) {
    let maxSum = 0;
    
    let dfs = (node, max) => {
        if(!node) {
            return 0;
        }
        
        if(!node.left && !node.right) {
            return 1;
        }
        
        let left = dfs(node.left);
        let right = dfs(node.right);
        
        if(left + right > maxSum) {
            maxSum = left + right;
        }
        
        if(left > right) {
            return left + 1;
        }
        
        return right + 1;
    }
    dfs(root)
    return maxSum;
};