/**


根据一棵树的中序遍历与后序遍历构造二叉树。

注意:
你可以假设树中没有重复的元素。

例如，给出

中序遍历 inorder = [9,3,15,20,7]
后序遍历 postorder = [9,15,7,20,3]
  3
   / \
  9  20
    /  \
   15   7
*/





function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}



var buildTree = function(inorder, postorder) {
  if (!inorder || !inorder.length) return null
  let post_index = postorder.length - 1
  const map = {}
  for (let i = 0; i <= post_index; i++) {
    map[inorder[i]] = i
  }
  const helper = (left, right) => {
    if (left > right) return null
    const val = postorder[post_index]
    const root = new TreeNode(val)
    post_index--
    const index = map[val]
    root.right = helper(index + 1, right)
    root.left = helper(left, index - 1)
    return root
  }
  return helper(0, post_index)
};



var buildTree = function(inorder, postorder) {
  if (!inorder || !inorder.length) return null
  let j = postorder.length - 1
  if (j < 0) return null

  const root = new TreeNode()
  const val = postorder[j]
  root.val = val
  const index = inorder.indexOf(val)
  const leftIn = inorder.slice(0, index)
  root.left = buildTree(leftIn, postorder.filter(item => leftIn.includes(item)))
  const rightIn = inorder.slice(index + 1)
  root.right = buildTree(rightIn, postorder.filter(item => rightIn.includes(item)))

  return root
};


console.log(buildTree(
  [2,3,1]
  ,[3,2,1]
))


