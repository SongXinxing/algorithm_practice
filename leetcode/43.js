/**
 * 字符串相乘
 */





// var addStrings = function(num1, num2) {
//   let add = 0, i = num1.length - 1, j = num2.length - 1, result = ''
//   while (i >= 0 || j >= 0 || add !== 0) {
//       const total = (num1[i--]^0 || 0) + (num2[j--]^0 || 0) + add
//       add = (total / 10)^0
//       result = (total % 10) + result
//   }
//   return result
// };

// var multiply = function(num1, num2) {
//   let result = ''
//   const mul = (string, num) => {
//       let mulRes = '', add = 0
//       for (let i = string.length - 1; i >= 0; i--) {
//           const temp = (string[i]^0) * (num^0) + add
//           add = (temp / 10)^0
//           mulRes = (temp % 10) + mulRes
//       }
//       if (add) mulRes = add + mulRes
//       return mulRes
//   }
//   for (let i = 0, len = num1.length - 1; i <= len ; i++) {
//       const total = mul(num2, num1[i]) + '0'.repeat(len - i)
//       result = addStrings(total, result)
//   }
//   return result
// };


// console.log(multiply("123" ,"456"))


