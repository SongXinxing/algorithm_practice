/**
 * 
 * 
给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。


示例：

输入：nums = [-1,2,1,-4], target = 1
输出：2
解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
 

提示：

3 <= nums.length <= 10^3
-10^3 <= nums[i] <= 10^3
-10^4 <= target <= 10^4

*/



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b)
  let result = nums[0] + nums[1] + nums[2]
  for (let i = 0, len = nums.length - 1; i <= len; i++) {
    let left = i + 1, right = len
    while(left < right) {
      const total = nums[i] + nums[left] + nums[right]
      if (total === target) {
        return total
      } else if (total > target) {
        right--
      } else {
        left++
      }
      if (Math.abs(total - target) < Math.abs(result - target)) result = total
    }
  }
  return result
};

console.log(
  threeSumClosest([-1,2,1,-4], 1)
)


