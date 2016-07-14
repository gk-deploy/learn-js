'use strict'

let Circle = function (radius) {
  if (!(this instanceof Circle)) {
    return new Circle(radius)
  }
  this.radius = radius

  function getSetRadius () {
    if (arguments.length > 0) {
      if (arguments[0] < 0) {
        throw new TypeError('Radius should be >= 0')
      }
      radius = arguments[0]
    }
    return radius
  }

  function diameter () {
    return radius * 2
  }

  function circumference () {
    return diameter() * Math.PI
  }

  // Expose privileged methods
  this.radius = getSetRadius
  this.diameter = diameter
  this.circumference = circumference

  this.radius(radius)
}

Circle.prototype = {
  constructor: Circle,

  area: function () {
    return this.radius * this.radius * Math.PI
  }
}

module.exports = Circle
