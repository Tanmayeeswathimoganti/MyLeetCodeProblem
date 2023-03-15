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
var maxAncestorDiff = function(root) {
    let dfs = (node, max, min) => {
        if(!node) {
            return max - min;
        }
        
        max = Math.max(max, node.val);
        min = Math.min(min, node.val);
        
        let left = dfs(node.left, max, min);
        let right = dfs(node.right, max, min);
        
        return Math.max(left, right);
    }
    
    if(!root) {
        return 0;
    }
    
    return dfs(root, root.val, root.val);
};