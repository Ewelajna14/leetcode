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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    
    const reverseNodes = (node)=>{
        if(node == null){
            return;
        }
        reverseNodes(node.left)
        reverseNodes(node.right)
        let hold = node.left;
        node.left = node.right
        node.right = hold
    }
    
  
    reverseNodes(root)
    return root
};