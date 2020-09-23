


// 后续遍历
var postorderTraversal = function(root) {
  const res = []
  if (!root) return []
  const stack = [ root ]
  while(stack.length) {
      const node = stack.pop()
      res.unshift(node.val)
      if (node.left) {
          stack.push(node.left)
      }
      if (node.right) {
          stack.push(node.right)
      }
  }
  return res
}

