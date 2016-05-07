module.exports = (function () {
  var assert = function (message, expr) {
    if (!expr) {
      throw new Error(message)
    }
    assert.count++
    return true
  }
  assert.count = 0
  return assert
})()
