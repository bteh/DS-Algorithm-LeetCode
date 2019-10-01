/*Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
 

But the following [1,2,2,null,3,null,3] is not:

    1
   / \
  2   2
   \   \
   3    3
 */

 /*
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */


 var isSymmetric = function(root) {
 	if(!root) return true;
 	function dfs(nodeA, nodeB){
 		if(!nodeA && !nodeB) return true;
 		if(!nodeA || !nodeB) return false;
 		if(nodeA.val !== nodeB.val) return false;
 		return dfs(nodeA.left, nodeB.right) && dfs(nodeA.right, nodeB.left);
 	}
 	return dfs(root.left, root.right);
 }