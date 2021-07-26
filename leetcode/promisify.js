const promisify = function (original) {
  if (typeof original !== 'function') {
    return throw new Error('mast be function')
  }
  function fn(...arg) {
    return new Promise((resolve, reject) => {
      original.call(this, ...arg, (err, value) => {
        if (err) return reject(err)
        resolve(value)
      })
    })
  }
  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
  return Object.defineProperties(
    fn,
    Object.getOwnPropertyDescriptors(original)
  );
}
