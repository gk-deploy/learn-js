'use strict'

const expect = require('chai').expect
const Circle = require('../../lib/circle')

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

  describe('Circle', function () {
    it('test inspect objects', function () {
      let circ = new Circle(6)
      let circ2 = { radius: 6 }

      expect(circ instanceof Object).to.equal(true)
      expect(circ instanceof Circle).to.equal(true)
      expect(circ2 instanceof Object).to.equal(true)

      expect(Circle).to.equal(circ.constructor)
      expect(Object).to.equal(circ2.constructor)
    })

    it('should create another object of same kind', function () {
      let circle = new Circle(6)
      let circle2 = new circle.constructor(9)

      expect(circle.constructor).to.equal(circle2.constructor)
      expect(circle2 instanceof Circle)
    })

    it('should inherit properties from  Circle.prototype', function () {
      let circle = new Circle(6)

      expect(circle.diameter()).to.equal(12)
    })

    it('test calling prototype without new returns undefined', function () {
      let circle = Circle(6)

      expect(typeof circle, 'undefined')
      expect(radius, 6)
    })
  })
})
