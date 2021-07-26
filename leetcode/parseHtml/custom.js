function compile(xml) {
  let result = {}
  let current = result
  let i = 0
  let stack = []
  while(i < xml.length) {
    const char = xml[i]
    if (char !== '<') {
      i++
      continue
    }

    if (xml[i + 1] === '/') {
      current = stack.pop()
      i = xml.indexOf('>')
      xml = xml.substring(i + 1)
      i = 0
    } else {
      const end = xml.indexOf('>', i)
      const temp = handleStart(xml.substring(i + 1, end))
      xml = xml.substring(end + 1)
      i = 0
      if (!current.children) current.children = []
      current.children.push(temp)
      stack.push(current)
      current = temp
    }
  }
  return result.children.length > 1 ? result.children : result.children[0]
}

function handleStart(str) {
  str = str.replace(/(?<==)\s*|\s*(?==)/g, '')
  const ary = str.split(' ')
  const vnode = {}
  vnode['tag'] = ary[0]
  ary.slice(1).forEach(item => {
    let [key, value] = item.split('=');
    if (!vnode.attributes) { vnode.attributes = [] }
    vnode.attributes.push({
      key,
      value: value && value.replace(/'|"/g, ''),
    })
  })
  return vnode
}

var xml = `<div id="container"><label id="footer" text="this is footer"></label></div>`;


console.log(JSON.stringify(compile(xml), null, 2))




// function fn (str) {
//   const result = {}
//   let i = 0
//   let current = result
//   const stack = []

//   while (i < str.length) {
//     if (str[i] !== '<') {
//       i++
//       continue
//     }

//     if (str[i + 1] === '/') {
//       current = stack.pop()
//       i = str.indexOf('>', i) + 1
//     } else {
//       const lastIndex = str.indexOf('>', i)
//       const tmp = getInfo(str.slice(i + 1, lastIndex))
//       stack.push(current)
//       if (!current.children) current.children = []

//       current.children.push(tmp)
//       current = tmp
//       i = lastIndex + 1
//     }
//   }

//   return result
// }

// function getInfo (tagStr) {
//   const attrList = tagStr.split(' ')
//   const result = {
//     tag: attrList[0],
//     attributes: []
//   }

//   for (let i = 1; i < attrList.length; i++) {
//     const info = attrList[i].split('=')

//     result.attributes.push({
//       key: info[0],
//       value: info[1].replace(/\"/g, '')
//     })
//   }

//   return result
// }

// const xml = `<div class="aaa" data-name="bbb">
// <p id="tag">
//   <span name="span" id="span"></span>
// </p>
// <span></span>
// </div>`

// console.log(JSON.stringify(fn(xml), null, 2))