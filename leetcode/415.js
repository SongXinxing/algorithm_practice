
// var addStrings = function(num1, num2) {
//   let add = 0, result = '', len = Math.max(num1.length, num2.length)
//   num1 = num1.split('').reverse().join('')
//   num2 = num2.split('').reverse().join('')
//   for (let i = 0; i < len; i++) {
//       let n1 = num1[i]^0 || 0
//       let n2 = num2[i]^0 || 0
//       const total = n1 + n2 + add
//       result = (total % 10) + result
//       add = (total / 10)^0
//   }
//   if (add) result = add + result
//   return result
// };


var addStrings = function(num1, num2) {
  let add = 0, i = num1.length - 1, j = num2.length - 1, result = ''
  while (i >= 0 || j >= 0 || add !== 0) {
      const total = (num1[i--]^0 || 0) + (num2[j--]^0 || 0) + add
      add = (total / 10)^0
      result = (total % 10) + result
  }
  return result
};

