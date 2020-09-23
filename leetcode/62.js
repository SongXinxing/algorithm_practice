




/**
 * @param {number} m 列
 * @param {number} n 行
 * @return {number}
 */
// var uniquePaths = function(m, n) {

//   function factorial(m) {
//       let total = 1
//       for (let i = 2; i <= m; i++) {
//           total *= i
//       }
//       return total
//   }
  
//   return factorial(m + n - 2) / factorial(m - 1) / factorial(n - 1)
// }



var uniquePaths = function(m, n) {

  if(m <= 0 || n <= 0)
    return 0;
  else if(m == 1  || n == 1)
    return 1;
  else if(m == 2 && n == 2)
    return 2;
  else if((m == 3 && n == 2) || (m == 2 && n == 3))
    return 3;

  let count = 1
  for (let i = 0; i < m; i++) {
    for (let j = i; j < n; j++) {
      if ()
    }
  }
}


console.log(uniquePaths(7, 3))


// 2,3 3

// 2,2 2
// 3,3 6
// 4,4 20
// 5,5 70
// 6,6 252

// 2,4 4
// 3,4 10









