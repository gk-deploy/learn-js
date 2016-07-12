'use strict'

let Circle = function (radius) {
  if (!(this instanceof Circle)) {
    return new Circle(radius)
  }
  this.radius = radius
}

Circle.prototype = {
  constructor: Circle,

  diameter: function () {
    return this.radius * 2
  },

  circumference: function () {
    return this.diameter() * Math.PI
  },

  area: function () {
    return this.radius * this.radius * Math.PI
  }
}

module.exports = Circle
