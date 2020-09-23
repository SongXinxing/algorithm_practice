var minCameraCover = function(root) {
  // 0 不安置 1 安置 2 被监控 无需 安装
  let res = 0
  const dfs = node => {
      if (!node) return 2
      const left = dfs(node.left)
      const right = dfs(node.right)
      if (left === 2 && right === 2) return 0
      if (right === 0 || left === 0) return res++, 1;
      if (left === 1 || right === 1) return 2
  }
  if (dfs(root) === 0) {
      res++
  }
  return res
};

const res = minCameraCover(
  {
    val: 0,
    left: null,
    right: null
  }
)
console.log(res)
