


var searchMatrix = function(matrix, target) {
  if (!matrix || !matrix.length) return false

  let width = matrix[0].length, height = matrix.length

  let row = height - 1, col = 0
  while(col < width && row >= 0) {
    if (matrix[row][col] === target) {
      return true
    } else if (matrix[row][col] > target) {
      row--
    } else {
      col++
    }
  }

  return false
};
