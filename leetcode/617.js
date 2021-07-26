/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
// var mergeTrees = function(t1, t2) {
//     if (!t1) return t2
//     if (!t2) return t1
//     const t1Stack = [ t1 ]
//     const t2Stack = [ t2 ]
//     while (t1Stack.length || t2Stack.length) {
//         const node1 = t1Stack.pop()
//         const node2 = t2Stack.pop()
//         if (node1 && node2) {
//           node1.val += node1.val
//         }
//         if (node1.left && node2.left) {
//           t1Stack.push(node1.left)
//           t2Stack.push(node2.left)
//         } else if (!node1.left) {
//           node1.left = node2.left
//         }
//         if (node1.right && node2.right) {
//           t1Stack.push(node1.right)
//           t2Stack.push(node2.right)
//         } else if (!node1.right) {
//           node1.right = node2.right
//         }
//     }
//     return t1
// }

var mergeTrees = function(t1, t2) {
  if (!t1) return t2
  if (!t2) return t1
  t1.val += t2.val
  t1.left = mergeTrees(t1.left, t2.left)
  t1.right = mergeTrees(t1.right, t2.right)
  return t1
}

