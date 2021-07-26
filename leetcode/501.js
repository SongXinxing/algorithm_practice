
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */




var findMode = function(root) {
  const stack = {}
  const dfs = node => {
      if (!node) return
      if (stack[node.val]) {
          stack[node.val]++
      } else {
          stack[node.val] = 1
      }
      dfs(node.left)
      dfs(node.right)
  }
  dfs(root)
  let result = undefined
  Object.keys(stack).forEach(item => {
      if (result === undefined) return result = stack[item]
      if (stack[item] > result) {
          result = stack[item]
      }
  })
  const res = []
  Object.keys(stack).forEach(item => {
      if (stack[item] === result) {
          res.push(item)
      }
  })
  return res
};






var findMode = function(root) {
    let count = 0, maxCount = 0, base, result = []
    const update = x => {
      if (x === base) {
        count++
      } else {
        count = 1
        base = x
      }
      if (count === maxCount) {
        result.push(x)
      }
      if (count > maxCount) {
        maxCount = count
        result = [ x ]
      }
    }
    const dfs = node => {
        if (!node) return
        dfs(node.left)
        update(node.val)
        dfs(node.right)
    }
    dfs(root)
    return result
};




var findMode = function(root) {
    let base, count = 0, maxCount = 0, result = []
    const update = x => {
        if (x === base) {
            count++
        } else {
            count = 1
            base = x
        }
        if (count === maxCount) {
            result.push(x)
        }
        if (count > maxCount) {
            maxCount = count
            result = [ x ]
        }
    }
    let curr = root, pre
    while (curr) {
        if (!curr.left) {
            update(curr.val)
            curr = curr.right
            continue
        }
        pre = curr.left
        while (pre.right && pre.right !== curr) {
            pre = pre.right
        }
        if (!pre.right) {
            pre.right = curr
            curr = curr.left
        } else {
            pre.right = null
            update(curr.val)
            curr = curr.right
        }
    }
    return result
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
// const a = [1, null, 2, 2]
// const root = new TreeNode()
// root.val = 1
// root.left = null
// root.right = new TreeNode()
// root.right.val = 2
// root.right.left = new TreeNode()
// root.right.left.val = 2

// [1,null,2]
const root = new TreeNode()
root.val = 1
root.right = new TreeNode()
root.right.val = 2

console.log(root)

console.log(findMode(root))
