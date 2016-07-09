'use strict'

const expect = require('chai').expect

describe('Object Property', function () {
  it('should setting property shadows property on prototype', function () {
    let object1 = {}
    let object2 = {}

    // Both objects inherit Object.prototype.toString
    expect(object1.toString).to.equal(object2.toString)

    let chris = {
      name: 'Chris',

      toString: function () {
        return this.name
      }
    }

    // Chris object defines a toString property that is not 
    // the same object as object1 inherits from
    expect(object1.toString).to.not.equal(chris.toString)

    // Deleting the custom property unshadows the
    // inherited Object.prototype.toString
    delete chris.toString
    expect(object1.toString).to.equal(object2.toString)
  })
})
