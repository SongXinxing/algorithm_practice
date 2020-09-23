




// // 递归实现
// var inorderTraversal = function(root) {
//   const res = []
//   function out(node) {
//       if (!node) return
//       if (node.left) out(node.left)
//       if (node) res.push(node.val)
//       if (node.right) out(node.right)
//   }
//   out(root)
//   return res
// };


// 非递归
// var inorderTraversal = function(root) {
//   const res = []
//   let predecessor
//   while(root) {
//     if (root.left) {
//       // predecessor 节点就是当前 root 节点向左走一步，然后一直向右走至无法走为止
//       predecessor = root.left;
//       while (predecessor.right && predecessor.right !== root) {
//           predecessor = predecessor.right;
//       }

//       // 让 predecessor 的右指针指向 root，继续遍历左子树
//       if (!predecessor.right) {
//           predecessor.right = root;
//           root = root.left;
//       }
//       // 说明左子树已经访问完了，我们需要断开链接
//       else {
//           res.push(root.val);
//           predecessor.right = null;
//           root = root.right;
//       }
//     } else {
//       res.push(root.val)
//       root = root.right
//     }
//   }
//   return res
// };




var inorderTraversal = function(root) {
  const res = []
  let predecessor
  while(root) {
    if (root.left) {
      predecessor = root.left
      while(predecessor.right && predecessor.right !== root) {
        predecessor = root.right
      }
      if (!predecessor.right) {
        predecessor.right = root
        root = root.left
      } else {
        res.push(root.val)
        root = root.right
        predecessor.right = null
      }
    } else {
      res.push(root.val)
      root = root.right
    }
  }
}


// 中序遍历

// 非递归遍历 时间复杂度 O(n) 空间复杂度 O(n)
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



