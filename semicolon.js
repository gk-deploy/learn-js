function Point(x, y) {
  this.x = x || 0
  this.y = y || 0
}

Point.prototype.isOrigin = function() {
  return this.x === 0 && this.y === 0
}

console.log(new Point(2,3).isOrigin())
