var subsets = function(nums) {
  let result = []
  let stack = []
  let len = nums.length
  const dfs = (curr, index) => {
      if (curr === len) {
          console.log(index, stack)
          result.push(stack.slice())
          return
      }
      stack.push(nums[curr])
      dfs(curr + 1, '1')
      stack.pop()
      dfs(curr + 1, '2')
  }
  dfs(0)
  return result
};


subsets([1,2,3])