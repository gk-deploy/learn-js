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

MatrixPerimeter.prototype.getItsPerimeter = function (i, j, matrixSize) {
  let perimeter = 4
  if (j > 0 && this.isMarked(i, j-1)) {
    perimeter--
  }
  if (j < matrixSize.nC - 1 && this.isMarked(i, j+1)) {
    perimeter--
  }
  if (i > 0 && this.isMarked(i-1, j)) {
    perimeter--
  }
  if (i < matrixSize.nR - 1 && this.isMarked(i+1, j)) {
    perimeter--
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
        this.sumPerimeter(this.getItsPerimeter(i, j, {nR: TOTAL_ROWS, nC: TOTAL_COLUMNS}))
      }
    }
  }
}

module.exports = MatrixPerimeter
