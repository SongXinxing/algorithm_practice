// /**
//  * @param {character[][]} grid
//  * @return {number}
//  */

// var numIslands = function(grid) {
//   if (!grid || !grid.length) return 0
//   let cLen = grid.length, rLen = grid[0].length
//   function find(i, j) {
//       if (i >= cLen || j >= rLen) return
//       if (grid[i][j] === '1') {
//           grid[i][j] = 0
//           find(i + 1, j)
//           find(i, j + 1)
//       }
//       return
//   }
//   let count = 0
//   for(let i = 0; i < cLen; i++) {
//       for (let j = 0; j < rLen; j++) {
//           if (grid[i][j] === '1') {
//               count++
//               find(i^0, j^0)
//           }
//       }
//   }
//   return count
// };

var numIslands = function(grid) {
  if (!grid || !grid.length) return 0
  let rLen = grid.length, cLen = grid[0].length, count = 0
  for (let i = 0; i < rLen; i++) {
      for (let j = 0; j < cLen; j++) {
          const stack = []
          if (grid[i][j] === '1') {
              count++
              stack.push([i, j])
          }
          while(stack.length) {
              const [row, col] = stack.pop()
              grid[row][col] = '0'
              if (row - 1 >= 0 && grid[row - 1][col] === '1') {
                  stack.push([row - 1, col])
              }
              if (row + 1 < rLen && grid[row + 1][col] === '1') {
                  stack.push([row + 1, col])
              }
              if (col - 1 >= 0 && grid[row][col - 1] === '1') {
                  stack.push([row, col - 1])
              }
              if (col + 1 < cLen && grid[row][col + 1] === '1') {
                  stack.push([row, col + 1])
              }
          }
      }
  }
  return count++
};

const a = // [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]
// [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]
// [["1","1","1"],["0","1","0"],["1","1","1"]]
[["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]
console.log(numIslands(a))