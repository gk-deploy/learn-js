module.exports = (function () {
  var assert = function (message, expr) {
    if (!expr) {
      throw new Error(message)
    }
    assert.count++
    return console.log('Test #.-' + (assert.count) + ' ' + message + ' => passed')
  }
  assert.count = 0
  return assert
})()
