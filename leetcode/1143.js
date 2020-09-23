// var longestCommonSubsequence = function(text1, text2) {
//   if (!text2 || !text1) return 0
//   let len1 = text1.length, len2 = text2.length
//   const dep = new Array(len2 + 1).fill(0)
//   for (let i = 1; i <= len1; i++) {
//       let last = 0
//       for (let j = 1; j <= len2; j++) {
//           let temp = dep[j]
//           if (text1[i - 1] === text2[j -1]) {
//               dep[j] = last + 1
//           } else {
//               dep[j] = Math.max(dep[j - 1], temp)
//           }
//           last = temp
//       }
//   }
//   return dep[len2]
// };



/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    if (!text1 || !text2) return 0
    const dep = new Array(text1.length + 1)
    for (let i = text1.length; i >= 0; i--) {
        if (i === 0) {
            dep[i] = new Array(text2.length + 1).fill(0)
            break
        }
        dep[i] = [ 0 ]
    }
    for (let i = 1; i <= text1.length; i++) {
        for (let j = 1; j <= text2.length; j++) {
            const prev = Math.max(dep[i][j - 1], dep[i - 1][j])
            if (text1[i - 1] === text2[j - 1]) {
                dep[i][j] = dep[i - 1][j - 1] + 1
                continue;
            } else {
                dep[i][j]  = prev
            }
        }
    }
    return dep[text1.length][text2.length]
};

console.log(longestCommonSubsequence("aaabce"
,"ace"))
