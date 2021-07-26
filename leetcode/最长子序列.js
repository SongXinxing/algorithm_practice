























const lengthOfLIS = function(nums) {
  let temp = nums.slice()
  let len = nums.length
  if (len <= 1) return len
  let stack = [0]
  for (let i = 0; i < len; i++) {
    const curr = nums[i]
    if (curr !== 0) {
      let j = stack[stack.length - 1]
      if (curr > nums[j]) {
        temp[i] = j
        stack.push(i)
      } else {
        let left = 0, right = stack.length - 1
        while (left < right) {
          const mid = (left + right) >> 1
          if (nums[stack[mid]] < curr) {
            left = mid + 1
          } else {
            right = mid
          }
        }
        if (curr < nums[stack[left]]) {
          if (left > 0) {
            temp[i] = stack[left - 1]
          }
          stack[left] = i
        }
      }
    }
  }
  let u = stack.length
  let v = stack[u - 1]
  while (u-- > 0) {
    stack[u] = v
    v = temp[v]
  }
  console.log(stack)
  return stack.length
}










// const lengthOfLIS = function(nums) {
//   let len = nums.length
//   if (len <= 1) return len
//   let stack = [ nums[0] ]
//   for (let i = 1; i < len; i++) {
//     const curr = nums[i]
//     if (curr > stack[stack.length - 1]) {
//       stack.push(curr)
//     } else {
//       let left = 0, right = stack.length - 1
//       while (left < right) {
//         const mid = (left + right) >> 1
//         if (stack[mid] < curr) {
//           left = mid + 1
//         } else {
//           right = mid
//         }
//       }
//       stack[left] = curr
//     }
//   }
//   console.log(stack)
//   return stack.length
// }
let ary =  [1, 3, 6, 8, 9, 10, 12]
ary = [0,1,4,5,2,3,7,6]
// console.log(lengthOfLIS(ary))


function quene(arr) {
  const p = arr.slice()
  const result = [0]
  let i, j, u, v, c
  const len = arr.length
  for (i = 0; i < len; i++) {
    const arrI = arr[i]
    if (arrI !== 0) {
      j = result[result.length - 1]
      if (arr[j] < arrI) {
        p[i] = j
        result.push(i)
        continue
      }
      u = 0
      v = result.length - 1
      while (u < v) {
        c = ((u + v) / 2) | 0
        if (arr[result[c]] < arrI) {
          u = c + 1
        } else {
          v = c
        }
      }
      if (arrI < arr[result[u]]) {
        if (u > 0) {
          p[i] = result[u - 1]
        }
        result[u] = i
      }
    }
  }
  u = result.length
  v = result[u - 1]
  while (u-- > 0) {
    result[u] = v
    v = p[v]
  }
  return result
}
// console.log(quene(ary))












function a(arr) {
  let temp = arr.slice()
  let len = arr.length
  let result = []
  result.push(0)
  for (let i = 0; i < len; i++) {
    const arrI = arr[i]
    if (arrI !== 0) {
      let j = result[result.length - 1]
      if (arrI > arr[j]) {
        temp[i] = j
        result.push(i)
        continue
      }
      let left = 0, right = result.length - 1
      while (left < right) {
        const mid = (left + right) >> 1
        if (arr[result[mid]] < arrI) {
          left = mid + 1
        } else {
          right = mid
        }
      }
      if (arrI < arr[result[left]]) {
        if (left > 0){
          temp[i] = result[left - 1]
        }
        result[left] = i
      }
    }
  }
  let u = result.length
  let v = result[u - 1]
  while (u-- > 0) {
    result[u] = v
    v = temp[v]
  }
  console.log(result)
  return result
}

a(ary)
