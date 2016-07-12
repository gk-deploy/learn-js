'use strict'

const Circle = require('./circle')

let Sphere = function (radius) {
  this.radius
}

Sphere.prototype = (function () {
  function F() {}
  F.prototype = Circle.prototype

  return new F()
}())

Sphere.prototype.constructor = Sphere

module.exports = Sphere
