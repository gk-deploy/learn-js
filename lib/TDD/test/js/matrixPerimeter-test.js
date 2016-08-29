'use strict'

const expect = require('chai').expect
var MatrixPerimeter = require('../../lib/matrixPerimeter')

describe('arrayPerimeter', function () {
  describe('.determinePerimeter()', function () {
    it('should return 0', function () {
      let matrixPerimeter = new MatrixPerimeter()
      let matrix = [[false]]
    
      matrixPerimeter.setMatrix(matrix)
      expect(matrix.determinePerimeter()).to.equal(0)
    })
  })
})
