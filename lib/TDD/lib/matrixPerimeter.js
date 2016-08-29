'use strict'

var MatrixPerimeter = function () {
  this.matrix = []
  this.perimeter = 0
}

MatrixPerimeter.prototype.setMatrix = function (matrix) {
  this.matrix = matrix
}

MatrixPerimeter.prototype.isMarked = function (i, j) {
  return this.matrix[i][j]
}

MatrixPerimeter.prototype.getItsPerimeter = function (i, j) {
  const TOTAL_COLUMNS = this.matrix[0].length
  const TOTAL_ROWS = this.matrix.length

  let perimeter = 4

  // Check Left
  if (j > 0) {
    if (this.matrix[i][j-1]) {
      perimeter--
    }
  }
  // Check Right
  if (j < TOTAL_COLUMNS - 1) {
    if (this.matrix[i][j+1]) {
      perimeter--
    }
  }
  // Check Top
  if (i > 0) {
    if (this.matrix[i-1][j]) {
      perimeter--
    }
  }
  // ACheck Bottom
  if (i < TOTAL_ROWS - 1) {
    if (this.matrix[i+1][j]) {
      perimeter--
    }
  }

  return perimeter
}

MatrixPerimeter.prototype.sumPerimeter = function (perimeter) {
  this.perimeter += perimeter
}

MatrixPerimeter.prototype.getPerimeter = function () {
  return this.perimeter
}

MatrixPerimeter.prototype.determinePerimeter = function () {
  const TOTAL_COLUMNS = this.matrix[0].length
  const TOTAL_ROWS = this.matrix.length

  for (let i = 0; i < TOTAL_ROWS; i++) {
    for (let j = 0; j < TOTAL_COLUMNS; j++) {
      if (this.isMarked(i, j)) {
        this.sumPerimeter(this.getItsPerimeter(i, j))
      }
    }
  }
}

module.exports = MatrixPerimeter
