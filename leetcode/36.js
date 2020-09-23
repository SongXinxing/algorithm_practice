/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  const rows = new Array(9)
  const cols = new Array(9)
  const blocks = new Array(9)

  for(let i = 0; i < 9; i++) {
    rows[i] = new Set()
    cols[i] = new Set()
    blocks[i] = new Set()
  }

  const getBlockIndex = (i, j) => {
    return (i / 3 ^ 0) * 3 + j / 3 ^ 0
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const s = board[i][j]
      if (s === '.') continue
      if (rows[i].has(s)) return false
      rows[i].add(s)
      if (cols[j].has(s)) return false
      cols[j].add(s)
      if (blocks[getBlockIndex(i, j)].has(s)) return false
      blocks[getBlockIndex(i, j)].add(s)
    }
  }

  return true
};


const a = [
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]

console.log(isValidSudoku(a))