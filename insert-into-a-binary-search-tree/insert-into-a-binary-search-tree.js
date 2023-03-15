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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    let insertNode = new TreeNode(val);
    
    let traversing = (root, node) => {
        if(!root) {
            return node;
        }
        
        if(node.val > root.val) {
            root.right = traversing(root.right, node);
        }else {
            root.left = traversing(root.left, node);
        }
        
        return root;
    }
    
    return traversing(root, insertNode);
};