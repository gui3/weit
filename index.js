//! weit
// module template from moment.js

(function (global, factory) {
  let define
  typeof exports === 'object' && typeof module !== 'undefined'
    ? module.exports = factory()
    : typeof define === 'function' && define.amd
      ? define(factory)
      : global.weit = factory()
}(this, function () { // ----------------------------
  function assert (condition, errorMessage = 'error') {
    if (!condition) {
      throw new Error('frum.js: ' + errorMessage)
    }
  }

  function weit (condition, time = 10, maxTime = 120000) {
    let total = 0

    const that = new Promise((resolve, reject) => {
      function check () {
        // console.log(total)
        total += time

        function errorHandler () {
          try {
            return condition()
          } catch (err) {
            clearInterval(interval)
            throw err
          }
        }

        if (total > maxTime) {
          clearInterval(interval)
          reject(new Error('weit::max time elapsed'))
        } else if (errorHandler()) {
          clearInterval(interval)
          resolve()
        }
      }
      const interval = setInterval(check, time)
    })
    return that
  }
  // ------------------------------------------------
  return weit
}))
