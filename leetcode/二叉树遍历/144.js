
// 前序遍历
var preorderTraversal = function(root) {
  const res = []
  const stack = []
  while(stack.length) {
      const node = stack.pop()
      if (node) res.push(node.val);
      else continue;
      node.right && stack.push(node.right)
      node.left && stack.push(node.left)
  }
  return res
}