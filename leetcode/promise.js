function Promise(callback){
  if (!new.target) {
    throw new Error('call by new')
    return
  }
  if (typeof callback !== 'function') {
    throw new Error('callback must be function')
    return
  }
  const resolve = (value) => {
    if (this.status === 'peeding') {
      this.status = 'fulfilled'
      this.value = value
      this.onFulfilledCallback.forEach(fn => {
        fn(this.value)
      })
    }
  }
  const reject = (err) => {
    if (this.status === 'peeding') {
      this.status = 'rejected'
      this.value = err
      this.onRejectedCallback.forEach(fn => {
        fn(this.value)
      })
    }
  }
  this.status = 'pedding'
  this.value = null
  this.onFulfilledCallback = []
  this.onRejectedCallback = []
  try {
    callback(resolve, reject)
  } catch(e) {
    reject(e)
  }
}

Promise.prototype.then = function(onFulfilled, onRejected) {
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : function(value) {}
  onRejected = typeof onRejected === 'function' ? onRejected : function(value) {}
  const _this = this
  if (this.status === 'fulfilled') {
    return new Promise(function(resolve, reject) {
      try {
        const x = onFulfilled(_this.data)
        if (x instanceof Promise) {
          x.then(resolve, reject)
        } else {
          resolve(x)
        }
      } catch(e) {
        reject(e)
      }
    })
  }
  if (this.status === 'rejected') {
    return new Promise(function(resolve, reject) {
      try {
        const x = onRejected(self.data)
        if (x instanceof Promise) {
          x.then(resolve, reject)
        } else {
          resolve(x)
        }
      } catch(e) {
        reject(e)
      }
    })
  }
  if (this.status === 'peeding') {
    return new Promise(function(resolve, reject) {
      self.onFulfilledCallback.push(function(val) {
        try {
          const x = onFulfilled(self.data)
          if (x instanceof Promise) {
            x.then(resolve, reject)
          } else {
            resolve(x)
          }
        } catch(e) {
          reject(e)
        }
      })
      self.onRejectedCallback.push(function(val) {
        try {
          const x = onRejected(self.data)
          if (x  instanceof Promise) {
            x.then(resolve, reject)
          } else {
            resolve(x)
          }
        } catch(e) {
          reject(e)
        }
      })
    })
  }
}
console.log(111)
new Promise(a => {a(1)}).then(res => console.log(res))





function quene(arr, max, cb) {
  let i = 0;
  let stack = []
  const fn = () => {
    if (i === arr.length) return
    const res = cb(arr[i++])
    stack.push(res)
    res.then(() => {
      stack.splice(stack.indexOf(res), 1)
      fn()
    })
    if (stack.length < max) {
      fn()
    }
  }
  fn()
  return Promise.all(stack).then(() => Promise.resolve('done'))
}

quene(new Array(10).fill(1), 3, async (v) => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(new Date().toString(), v)
      resolve()
    }, 1000)
  })
})



Promise.all = arr => {
  let result = []
  let j = 0
  return new Promise((resolve, reject) => {
    arr.map(async (p, i) => {
      try {
        const v = await p
        result[i] = v
        j++
        if (j === arr.length) {
          resolve(result)
        }
      } catch(e) {
        reject(e)
      }
    })
  })
}

function promisify(callback) {
  return function(...arg) {
    return new Promise((resolve, reject) => {
      callback(...arg, (err, res) => {
        if (err) {
          reject(err)
          return
        }
        resolve(res)
      })
    })
  }
}