const arr = [
  [1,   4,  7, 11, 15, 16],
  [2,   5,  8, 12, 19, 22],
  [3,   6,  9, 16, 22, 24],
  [10, 13, 14, 17, 24, 25],
  [18, 21, 23, 26, 30, 31]
]
const target = 5 // 20

var searchMatrix = function(matrix, target) {
  if (!matrix || !matrix.length) return false

  // let col = matrix[0].length - 1

  for (let i = 0, len = matrix.length; i < len; i++) {
    if (binarySearch(matrix[i], target)) return true
  }

  return false
};
function binarySearch(arr, target) {
  let start = 0, end = arr.length - 1, mid
  while(start <= end) {
      mid = (start + (end - start) / 2)^0
      if (arr[mid] === target) {
          return true
      }
      else if (arr[mid] > target) {
          end = mid - 1
      } else {
          start = mid + 1
      }
  }
  return false
}



// var searchMatrix = function(matrix, target) {
//   if (!matrix || !matrix.length) return false

//   let width = matrix[0].length, height = matrix.length

//   let row = height - 1, col = 0
//   while(col < width && row >= 0) {
//     if (matrix[row][col] === target) {
//       return true
//     } else if (matrix[row][col] > target) {
//       row--
//     } else {
//       col++
//     }
//   }

//   return false
// };



// // 最优解法
// var searchMatrix = function(matrix, target) {
//   if (!matrix || !matrix.length || !matrix[0].length) return false
//   const height = matrix.length, width = matrix[0].length
//   let row = height - 1, col = 0
//   while(row >= 0 && col < width) {
//       const v = matrix[row][col]
//       if (v === target) {
//           return true
//       } else if (v < target) {
//           col++
//       } else {
//           row--
//       }
//   }
//   return false
// };



console.log(searchMatrix(arr, 5))
console.log(searchMatrix(arr, 20))
console.log(searchMatrix(arr, 21))
console.log(searchMatrix(arr, 22))


// var searchMatrix = function(matrix, target) {
//   if (!matrix || !matrix.length) return false

//   const minLen = Math.min(matrix.length, matrix[0].length)
//   for (let i = 0; i < minLen; i++) {
//     if (
//       binarySearch(matrix, target, i, false) ||
//       binarySearch(matrix, target, i, true)
//     ) {
//       return true
//     }
//   }

//   // let col = matrix[0].length - 1

//   return false
// };
// function binarySearch(arr, target, index, vertical) {
//   let start = index
//   let end = vertical ? arr.length - 1 : arr[0].length - 1

//   while (start <= end) {
//     const mid = (start + (end - start) / 2)^0
//     let curr
//     if (vertical) {
//       curr = arr[mid][index]
//     } else {
//       curr = arr[index][mid]
//     }
//     if (curr === target) {
//       return true
//     } else if (curr < target) {
//       start = mid + 1
//     } else {
//       end = mid - 1
//     }
//   }
//   return false
// }





// 二分查找非递归
// function binarySearch(arr, target) {
//   let start = 0, end = arr.length - 1, mid
//   while(start <= end) {
//     mid = (start + (end - start) / 2)^0
//     if (arr[mid] === target) {
//       return true
//     } else {
//       if (arr[mid] < target) {
//         start = mid + 1
//       } else {
//         end = mid - 1
//       }
//     }
//   }
//   return false
// }

// 二分查找递归
// function binarySearch(arr, target, first = 0) {
//   if (!arr || !arr.length) return false
//   let mid = (arr.length / 2)^0
//   if (arr[mid] === target) {
//     return true
//   } else if (arr[mid] > target) {
//     return binarySearch(arr.slice(0, mid), target, first)
//   } else {
//     return binarySearch(arr.slice(mid + 1), target, first + 1 + mid)
//   }
// }
