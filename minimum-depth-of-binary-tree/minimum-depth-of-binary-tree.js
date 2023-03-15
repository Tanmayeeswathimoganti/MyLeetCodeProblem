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
var minDepth = function(root) {
    
    let dfs = (root, depth) => {
        if(!root) {
            return 0;
        }
        
        if(!root.left && !root.right) {
            return 1;
        }
        
        depth = depth + 1;
        
        let left = dfs(root.left, depth);
        let right = dfs(root.right, depth);
        
        if(!root.left) {
            return right + 1;
        }
        
        if(!root.right) {
            return left + 1;
        }
        
        if(left < right) {
            return left + 1;
        }
        
        return right + 1;
    }
    
    return dfs(root, 0);
};