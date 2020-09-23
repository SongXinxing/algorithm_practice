

/**
 * 
 * 
 * 
 * 图的遍历 & 回溯
 */


 
// 0 未搜索
// 1 搜索中
// 2 已完成 无出度，则搜索完成

// DFS，深度优先搜索
function canFinish(numCourses, prerequisites) {
  function dfs(i, outdegree, colors) { // 搜索 元素i 如果有出度，递归搜索
    if (colors[i] === 1) return false // 如果当前元素正在被搜索，则说明有环，返回false
    if (colors[i] === 2) return true // 如果当前元素已经搜索完成（没有出度 or 出度均完成），直接返回true
    colors[i] = 1 // 将当前元素的状态置为 搜索中
    if (!outdegree[i]) {
      colors[i] = 2
      return true
    }
    for (let j = 0; j < outdegree[i].length; j++) { // 循环所有出度，递归搜索
      const s = outdegree[i][j]
      if (!dfs(s, outdegree, colors)) return false // 如果有环 返回false
    }
    colors[i] = 2 // 所有出度均可完成，当前状态置为已完成
    return true
  }

  const outdegree = new Array(numCourses) // 出度表

  for (let i = 0, len = prerequisites.length; i < len; i++) {
    const cur = prerequisites[i]
    if (outdegree[cur[1]]) {
      outdegree[cur[1]].push(cur[0])
      continue
    }
    outdegree[cur[1]] = [ cur[0] ]
  }

  let colors = new Array(numCourses).fill(0)

  for (let i = 0; i < numCourses; i++) { // 遍历 依次 深度搜索
    if (!dfs(i, outdegree, colors)) return false
  }
  return true
}


// // BFS 广度优先搜索
// var canFinish = function(numCourses, prerequisites) {
//   const indegree = new Array(numCourses).fill(0) // 入度表

//   const outdegree = {} // 可以省略 直接将 依赖 存储到 入度表中

//   for (let i = 0, len = prerequisites.length; i < len; i++) {
//     const cur = prerequisites[i]
//     indegree[cur[1]]++
//     outdegree[cur[0]] = [ cur[1] ].concat(outdegree[cur[0]])
//   }
//   let stack = [], count = 0
//   indegree.forEach((item, index) => {
//     if (item === 0) {
//       stack.push(index)
//       count++
//     }
//   })
//   while(stack.length) {
//     const finished = stack.pop()
//     const out = outdegree[finished]
//     out && out.forEach(item => {
//       indegree[item]--
//       if (indegree[item] === 0) {
//         stack.push(item)
//         count++
//       }
//     })
//   }
//   return count === numCourses
// }


console.log(canFinish(2, [[1,0],[0,1]]))





