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
  }
}

// Circle.prototype.diameter = function () {
//   return this.radius * 2
// }

// Circle.prototype.circumference = function () {
//   return this.diameter() * Math.PI
// }

// Circle.prototype.area = function () {
//   return this.radius * this.radius * Math.PI
// }

module.exports = Circle
