
// 中序遍历
var inorderTraversal = function(root) {
  const res = []
  const stack = []
  while(root || stack.length) {
    while(root) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    res.push(root.val)
    root = root.right
  }
  return res
}


// 前序遍历
var preorderTraversal = function(root) {
  const res = []
  const stack = [ root ]
  while(stack.length) {
      const node = stack.pop()
      if (node) res.push(node.val);
      else continue;
      node.right && stack.push(node.right)
      node.left && stack.push(node.left)
  }
  return res
}

// 后续遍历
var postorderTraversal = function(root) {
  const res = []
  const stack = [ root ]
  while(stack.length) {
      const node = stack.pop()
      if (node) res.unshift(node.val)
      else continue;
      node.left && stack.push(node.left)
      node.right && stack.push(node.right)
  }
  return res
};