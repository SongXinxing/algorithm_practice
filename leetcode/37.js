
// 解数独

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  const rows = new Array(9)
  const cols = new Array(9)
  const blocks = new Array(9)
  function getBlockIndex(i, j) {
    return (i / 3 ^ 0) * 3 + j / 3 ^ 0
  }

  const options = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  for (let i = 0; i < 9; i++) {
    rows[i] = new Set(options)
    cols[i] = new Set(options)
    blocks[i] = new Set(options)
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const s = board[i][j]
      if (s !== '.') {
        rows[i].delete(s)
        cols[j].delete(s)
        blocks[getBlockIndex(i, j)].delete(s)
      }
    }
  }

  const fill = (i, j) => {
    if (j === 9) {
      i++
      j = 0
      if (i === 9) return true
    }

    if (board[i][j] !== '.') return fill(i, j + 1)

    const blockIndex = getBlockIndex(i, j)
    for (let index = 0; index < 9; index++) {
      const s = options[index]

      if (!rows[i].has(s) || !cols[j].has(s) || !blocks[blockIndex].has(s)) continue

      rows[i].delete(s)
      cols[j].delete(s)
      blocks[blockIndex].delete(s)
      board[i][j] = s

      if (fill(i, j + 1)) return true

      rows[i].add(s)
      cols[j].add(s)
      blocks[blockIndex].add(s)
      board[i][j] = '.'
    }
    return false
  }
  fill(0, 0)

  return board

};






let list = [
  [".",".","9","7","4","8",".",".","."],
  ["7",".",".",".",".",".",".",".","."],
  [".","2",".","1",".","9",".",".","."],
  [".",".","7",".",".",".","2","4","."],
  [".","6","4",".","1",".","5","9","."],
  [".","9","8",".",".",".","3",".","."],
  [".",".",".","8",".","3",".","2","."],
  [".",".",".",".",".",".",".",".","6"],
  [".",".",".","2","7","5","9",".","."]
]
console.log(solveSudoku(list))