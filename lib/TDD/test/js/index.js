var expect = require('chai').expect

var arr = []

describe('ArrayTest', function () {
  beforeEach(function () {
    arr = [1, 2, 3, 4, 5]
  })

  it('test array splice should not modify array', function () {
    var result = arr.splice(2, 3)
    expect([1, 2, 3, 4, 5]).to.be.equal(arr)
  })
  
  it('test array splice should modify array', function () {
    var result = arr.splice(2, 3)
    expect([1, 2], arr)
  })

  it('test array splice should return removed items', function () {
    var result = arr.splice(2, 3)
    expect([3, 4, 5], result)
  })
})
