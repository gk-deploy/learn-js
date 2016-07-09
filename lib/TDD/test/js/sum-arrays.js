'use strict'

const expect = require('chai').expect

if (!Array.prototype.sum) {
  Array.prototype.sum = function () {
    let sum = 0

    for (let i = 0, l = this.length; i < l; i++) {
      sum += this[i]
    }

    return sum
  }
}

describe('Array Sum', function () {
  it('should summarize numbers in array', function () {
    let array = [1, 2, 3, 5]

    expect(array.sum()).to.equal(11)
  })
})
