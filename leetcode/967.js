/**

返回所有长度为 N 且满足其每两个连续位上的数字之间的差的绝对值为 K 的非负整数。

请注意，除了数字 0 本身之外，答案中的每个数字都不能有前导零。例如，01 因为有一个前导零，所以是无效的；但 0 是有效的。

你可以按任何顺序返回答案。

 

示例 1：

输入：N = 3, K = 7
输出：[181,292,707,818,929]
解释：注意，070 不是一个有效的数字，因为它有前导零。
示例 2：

输入：N = 2, K = 1
输出：[10,12,21,23,32,34,43,45,54,56,65,67,76,78,87,89,98]
 

提示：

1 <= N <= 9
0 <= K <= 9


*/



/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
// var numsSameConsecDiff = function(n, k) {
//   const dfs = (num, n) => {
//     if (n === 1) {
//       return [ num ]
//     }
//     let total = []
//     if (k === 0) {
//       total = dfs(num, n - 1)
//     } else {
//       if (num >= k) {
//         total = dfs(num - k, n - 1)
//       }
//       if (num + k <= 9) {
//         total = total.concat(dfs(num + k, n - 1))
//       }
//     }
//     return total.map(item => {
//       return num * (10 ** (n - 1)) + item
//     })
//   }
//   let result = n === 1 ? [0] : []
//   for (let i = 1; i <= 9; i++) {
//     const temp = dfs(i, n)
//     result = result.concat(temp)
//   }
//   return result
// };



var numsSameConsecDiff = function(n, k) {
  let result = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9])
  for (let step = 1; step < n; step++) {
    const temp = new Set()
    result.forEach(item => {
      const d = item % 10
      if (d - k >= 0) {
        temp.add(item * 10 + d - k)
      }
      if (d + k <= 9) {
        temp.add(item * 10 + d + k)
      }
    })
    result = temp
  }
  if (n === 1) result.add(0)
  return [...result]
};

var numsSameConsecDiff = function(n, k) {
  if(n === 1) return [0,1,2,3,4,5,6,7,8,9]
  let res = [];
  function helper(arr, left){
    if(left !== 0){
      let tmp = [];
      let len = arr.length;
      for(let i=0;i< len;i++){
        let num = arr[i];
        let last = num[num.length-1]
        for(let j=0;j<=9;j++){
          if(Math.abs(Number(last) - j) === k){
            tmp.push(num+j)
          }
        }
      }
      res = [...tmp];
      helper(tmp, left-1)
    }
  }
  helper(['1','2','3','4','5','6','7','8','9'], n - 1)
  return res;
}


console.log(
  numsSameConsecDiff(
    3, 0
  )
)