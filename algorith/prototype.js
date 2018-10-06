function foo () {
  let b = 1;
  window.b = 2;
  return {
    getA() {
      return b
    },
    getAA() {
      return this.b
    },
    getB: () => {
      return b
    },
    b: this.b,
    getBB: () => {
      return this.b
    }
  }
}
let u = {
  t: function t () {
    let f = foo();
    let y1 = f.getA()
    let y2 = f.getAA()
    let y3 = f.getB()
    let y4 = f.getBB()
    console.log(y1, y2, y3, y4)
  }
}
t.bind({b: 3})()
