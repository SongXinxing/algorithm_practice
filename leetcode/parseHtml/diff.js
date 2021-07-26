

const next = [1,2,3,4,5]
const prev = [2,4,3]


function diff(next, prevChildren) {
  const nextChildren = [...next]
  let result = []
  let find = false
  for (let i = 0; i < nextChildren.length; i++) {
    const nextNode = nextChildren[i]
    for (let j = 0; j < prevChildren.length; j++) {
      const prevNode = prevChildren[j]
      if (nextNode === prevNode) {
        find = true
        console.log('复用', i)
        result[i] = prevNode
      }
    }
    if (!find) {
      console.log('new', i)
      result[i] = nextNode
    }
    find = false
  }
  return result
}


console.log(diff(next, prev))

