const _lazyMan = function (name) {
  this.tasks = []
  const self = this
  const fn = (function(name) {
    return function() {
      console.log(`this is ${name}`)
      self.next()
    }
  })(name)
  self.tasks.push(fn)
  setTimeout(() => {
    self.next()
  })
}
_lazyMan.prototype.eat = function(name) {
  const self = this
  const fn = (function(name) {
    return function() {
      console.log(name)
      self.next()
    }
  })(name)
  this.tasks.push(fn)
  return this
}
_lazyMan.prototype.next = function() {
  const fn = this.tasks.shift()
  fn && fn()
}
_lazyMan.prototype.sleep = function(time) {
  const self = this
  const fn = (function(time) {
    return function () {
      setTimeout(() => {
        console.log(`after wait ${ time } s`)
        self.next()
      }, time * 1000)
    }
  })(time)
  this.tasks.push(fn)
  return this
}

const lazyMan = function(name) {
  return new _lazyMan(name)
}


// const a = lazyMan('biz').eat('1').sleep(3).eat(2).eat(3).sleep(3)
// setTimeout(() => {
//   lazyMan('tom').eat(1).sleep(1).sleep(2).eat(19)
// }, 0)

setTimeout(() => {
  console.log(1)
  Promise.resolve().then(() => {
    console.log(2)
  })
  setTimeout(() => {console.log(3)}, 0)
})

setTimeout(() => {
  console.log(4)
  Promise.resolve().then(() => {
    console.log(5)
  })
})
