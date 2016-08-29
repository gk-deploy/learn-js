'use strict'

var matrixPerimeter = {
  matrix: [],
  perimeter: 0,

  setMatrix : function (matrix) {
    this.matrix = matrix
  },

  getPerimeter : function () {
    return this.perimeter
  },

  determinePerimeter: function () {
    var numCol = this.matrix[0].length

    for (let i = 0; i < this.matrix.length; i++) {
      for (let j = 0; j < numCol; j++) {
        if (this.matrix[i][j]) {
          let perimeterForCell = 4
          // Check Left
          if (j > 0) {
            if (this.matrix[i][j-1]) {
              perimeterForCell--
            }
          }
          // Check Right
          if (j < numCol - 1) {
            if (this.matrix[i][j+1]) {
              perimeterForCell--
            }
          }
          // Check Top
          if (i > 0) {
            if (this.matrix[i-1][j]) {
              perimeterForCell--
            }
          }
          // Check Bottom
          if (i < this.matrix.length - 1) {
            if (this.matrix[i+1][j]) {
              perimeterForCell--
            }
          }
          this.perimeter += perimeterForCell
        }
      }
    }
  }
}

var matrix = [[false, false, false,  true, false],
          [false,  true,  true,  true, false],
          [false, false, false,  true, false],
          [false,  true,  true,  true, false],
          [ true,  true, false, false, false]]

matrixPerimeter.setMatrix(matrix)
matrixPerimeter.determinePerimeter()

console.log(matrixPerimeter.getPerimeter())
