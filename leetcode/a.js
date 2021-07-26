// /**
//  * @param {number[][]} edges
//  * @return {number[]}
//  */
// var findRedundantDirectedConnection = function(edges) {

//     const hasCircle = (start, outdegree, set) => {
//         if (set.has(start)) return true
//         set.add(start)
//         const out = outdegree[start]
//         if (out) {
//             for (let j = 0; j < out.length; j++) {
//                 if (hasCircle(out[j], outdegree, set)) return true
//             }
//         }
//         return false
//     }
//     const indegree = [] // 入度表
//     const outdegree = []
//     let conflictStack
//     let circleStack
//     for (let i = 0, len = edges.length; i < len; i++) {
//         const line = edges[i]
//         const child = line[1]
//         const parent = line[0]
//         if (indegree[child] === undefined) {
//             indegree[child] = parent
//         } else { // 有两个入度，则记录
//             conflictStack = line
//         }

//         if (outdegree[parent]) {
//             outdegree[parent].push(child)
//         } else {
//             outdegree[parent] = [ child ]
//         }
//         if (hasCircle(parent, outdegree, new Set()) && !circleStack) {
//             circleStack = [parent, child]
//         }
//     }
//     if (!conflictStack) {
//         return circleStack
//     }
//     if (conflictStack && circleStack) {
//         const i = outdegree[conflictStack[0]].indexOf(conflictStack[1])
//         outdegree[conflictStack[0]].splice(i, 1)
//         if (!hasCircle(conflictStack[0], outdegree, new Set()) && !hasCircle(conflictStack[1], outdegree, new Set())) {
//             return conflictStack
//         }
//         return [indegree[conflictStack[1]], conflictStack[1]]
//     }

//     return conflictStack
// };



// const a =
// // [[3,1],[1,4],[3,5],[1,2],[1,5]]
// // [[5,2],[5,1],[3,1],[3,4],[3,5]]
// // [[2,1],[3,1],[4,2],[1,4]]
// // [[1,2],[1,3],[2,3]]
// [[4,2],[1,5],[5,2],[5,3],[2,4]]
// // [[5,2],[5,1],[3,1],[3,4],[3,5]]
// // [[1,2],[2,3],[3,4],[4,1],[1,5]]

// console.log(findRedundantDirectedConnection(a))



/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var permuteUnique = function(nums) {
//     const len = nums.length
//     if (!len) return []
//     if (len === 1) return [ nums ]
//     const result = []
//     const map = {}
//     for (let i = 0; i < len; i++) {
//         if (map[nums[i]]) continue
//         map[nums[i]] = true
//         const a = [...nums]
//         a.splice(i, 1)
//         const temp = permuteUnique(a)
//         temp.forEach(item => {
//             result.push([ nums[i], ...item ])
//         })
//     }
//     return result
// };

// console.log(permuteUnique([1,1,2]))





// require('./501')
require('./967')



