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
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
    let nodeVal = root.val;
    let diff = Math.abs(root.val - target);
    
    let close = (node) => {
        let temp = Math.abs(node.val - target);
           if(temp < diff) {
               nodeVal = node.val;
               diff = temp;
           }
        
        if(node.left) {
                close(node.left);
        }
        
        if(node.right) {
                close(node.right);
        }
    }
    
   close(root);
    
    return nodeVal;
};