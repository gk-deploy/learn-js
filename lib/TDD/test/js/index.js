var expect = require('chai').expect

describe('ArrayTest', function () {
  it('test array splice should not modify array', function () {
    var arr = [1, 2, 3, 4, 5]
    var result = arr.splice(2, 3)

    expect([1, 2, 3, 4, 5]).to.be.equal(arr)
  })
})
