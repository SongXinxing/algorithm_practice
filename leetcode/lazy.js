
class _lazyMan1 {
  task = []
  constructor(name) {
    this.next = this.next.bind(this);
    this.eat = this.eat.bind(this);
    this.sleep = this.sleep.bind(this);
    const fn = ((name) => {
      return () => {
        console.log(`this is ${name}`)
        this.next()
      }
    })(name)
    this.task.push(fn)
    setTimeout(() => {
      this.next()
    }, 0)
    return this
  }
  next() {
    const task = this.task.shift()
    if (task) task()
  }
  eat(name) {
    const fn = ((name) => {
      return () => {
        console.log(`eat ${ name }`)
        this.next()
      }
    })(name)
    this.task.push(fn)
    return this
  }
  sleep(time) {
    const fn = ((time) => {
      return () => {
        setTimeout(() => {
          console.log(`after wait ${time} s`)
          this.next()
        }, time * 1000)
      }
    })(time)
    this.task.push(fn)
    return this
  }
}


function lazyMan(name) {
  return new _lazyMan(name)
}
// const a = lazyMan('biz').eat('1').sleep(3).eat(2).eat(3).sleep(3)
// lazyMan('tom').eat(1).sleep(1).sleep(2).eat(19)


function cury(fn) {
  const len = fn.length
  const stack = []
  const result = function (arg) {
    stack.push(arg)
    if (stack.length >= len) {
      return fn(...stack)
    } else {
      return result
    }
  }
  return result
}
const sub = function(a, b, c, d) {
  return a + b + c + d
}
const a = cury(sub)
console.log(a(1)(2)(3)(4) === sub(1,2,3,4))



class _lazyMan {
  task = []
  timmer = null
  constructor(name) {
    this.next = this.next.bind(this);
    this.eat = this.eat.bind(this);
    this.sleep = this.sleep.bind(this);
    const fn = ((name) => {
      return () => {
        console.log(`this is ${name}`)
      }
    })(name)
    this.task.push(fn)
    return this.next()
  }
  next() {
    if (this.timmer) return this
    this.timmer = true
    setTimeout(async () => {
      console.log('----')
      while (this.task.length) {
        const fn = this.task.shift()
        await fn()
      }
      this.timmer = false
    })
    return this
  }
  eat(name) {
    const fn = ((name) => {
      return () => {
        console.log(`eat ${name}`)
      }
    })(name)
    this.task.push(fn)
    return this.next()
  }
  sleep(time) {
    const fn = ((time) => {
      return async () => {
        await new Promise(resolve => {
          setTimeout(() => {
            console.log(`after wait ${time} s`)
            resolve()
          }, time * 1000)
        })
      }
    })(time)
    this.task.push(fn)
    return this.next()
  }
}


function lazyMan(name) {
  return new _lazyMan(name)
}
// const a = lazyMan('biz').eat('1').sleep(3).eat(2).eat(3).sleep(3)
const b = lazyMan('tom').sleep(1).eat(1).sleep(1).sleep(2).eat(19)
setTimeout(() => {
  b.eat(22)
}, 10000)
