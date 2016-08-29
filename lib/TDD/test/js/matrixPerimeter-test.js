'use strict'

const expect = require('chai').expect
var MatrixPerimeter = require('../../lib/matrixPerimeter')

describe('arrayPerimeter', function () {
  describe('.determinePerimeter()', function () {
    it('should return perimeter equal to 0', function () {
      let matrixPerimeter = new MatrixPerimeter()
      let matrix = [[false]]
    
      matrixPerimeter.setMatrix(matrix)
      matrixPerimeter.determinePerimeter()
      expect(matrixPerimeter.getPerimeter()).to.equal(0)
    })

    it('should return perimeter equal to 4', function () {
      let matrixPerimeter = new MatrixPerimeter()
      let matrix = [[true]]
    
      matrixPerimeter.setMatrix(matrix)
      matrixPerimeter.determinePerimeter()
      expect(matrixPerimeter.getPerimeter()).to.equal(4)
    })

    it('should return perimeter equal to 22', function () {
      let matrixPerimeter = new MatrixPerimeter()
      let matrix = [
        [false, false, false,  true, false],
        [false,  true,  true,  true, false],
        [false, false, false,  true, false],
        [false,  true,  true,  true, false],
        [ true,  true, false, false, false]
      ]
      matrixPerimeter.setMatrix(matrix)
      matrixPerimeter.determinePerimeter()
      expect(matrixPerimeter.getPerimeter()).to.equal(22)
    })
    
    it('should return perimeter equal to 1112', function () {
      let matrixPerimeter = new MatrixPerimeter()
      let matrix = [
        [false,true,true,true,true,false,true,false,true,true,true,false,false,true,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,true,false,true,true,false,true,true,true,false,false,true,false,true,false,false,false,true,true,true,true,false,false,false,false,false,false,true,false,true,false,false,true,true,false,true,true,false,true,true,true,true,true,false,true,true,false,false,false,true,true,true,true,false,true,false,true,false,false,true,true,false,true,true,true,false], 
 [true,true,false,true,false,true,false,true,true,true,true,false,true,false,true,false,false,true,true,true,true,false,true,false,false,true,false,true,false,true,false,false,false,false,false,false,true,true,true,false,true,true,false,true,true,true,false,true,true,false,true,true,true,false,false,false,true,true,true,false,false,false,true,true,false,true,true,false,true,false,true,false,true,false,true,true,true,false,true,false,false,false,true,true,false,true,false,false,true,false,false,false,true,false,true], 
 [false,true,true,true,true,false,false,true,false,false,false,true,true,false,true,false,true,true,true,true,false,false,false,true,false,true,true,true,false,false,true,true,true,true,false,false,false,true,true,false,false,false,false,false,true,true,true,true,true,true,false,true,true,true,true,false,false,false,false,false,true,false,false,false,false,true,true,false,true,false,true,false,true,false,true,false,true,false,true,false,true,true,false,false,false,true,true,false,false,true,true,true,true,false,true], 
 [true,true,false,false,true,false,true,false,false,false,false,false,true,true,false,false,true,true,false,true,false,false,false,true,false,true,false,true,true,true,false,true,false,false,false,true,true,true,false,true,true,true,false,false,false,true,false,false,true,true,false,false,false,false,true,false,false,false,true,true,true,false,false,false,false,true,true,true,true,true,true,true,true,false,true,true,true,true,false,false,false,false,true,true,true,false,false,true,false,true,false,true,true,false,true], 
 [true,false,true,false,true,false,true,false,true,false,true,true,true,true,true,false,false,false,false,false,true,false,true,true,true,true,false,false,false,false,false,true,true,false,true,true,false,true,false,true,false,true,true,false,false,true,true,false,false,false,true,true,true,true,false,false,false,false,true,true,true,true,false,false,true,true,false,true,false,false,false,false,true,true,false,false,false,true,true,true,false,true,false,false,false,false,true,false,false,false,true,true,true,false,false], 
 [false,true,false,false,false,true,true,true,true,false,true,false,false,false,true,false,false,false,false,false,false,false,true,false,true,false,true,false,false,true,true,false,true,true,true,true,true,true,false,false,false,false,false,true,true,true,true,true,true,false,true,true,true,true,true,true,true,true,false,false,true,true,false,true,true,true,true,true,false,false,false,true,false,false,false,false,false,true,true,true,true,false,false,true,false,false,true,false,true,false,true,false,true,false,true], 
 [true,false,false,true,false,true,true,false,false,false,false,false,false,false,false,true,true,false,false,true,true,true,false,false,false,true,true,false,false,true,true,false,false,true,false,true,true,false,false,false,false,true,true,false,false,true,true,false,false,true,false,true,false,true,false,false,true,false,true,false,true,false,false,true,true,true,false,false,true,false,false,false,true,true,false,true,false,true,false,false,false,true,false,false,false,true,true,false,true,false,false,false,false,false,true], 
 [false,true,true,true,false,false,true,false,false,true,false,false,false,true,false,true,false,true,true,true,false,false,true,true,true,true,false,true,true,true,true,true,true,false,false,true,true,true,false,true,false,false,true,false,false,false,false,false,true,false,false,true,true,false,true,true,false,true,true,true,false,false,true,true,true,false,false,true,true,true,true,false,false,true,true,true,true,false,true,true,true,false,true,true,true,false,false,true,false,false,true,true,true,true,false], 
 [false,true,true,true,true,true,false,true,false,false,true,true,true,false,true,true,false,false,true,false,false,true,true,true,false,false,true,false,true,true,false,true,true,false,false,false,false,false,false,false,false,false,false,true,true,true,false,false,true,true,false,true,true,true,true,false,false,true,false,false,false,true,false,false,true,true,false,true,true,false,false,true,true,false,false,true,true,false,true,false,true,true,false,false,false,false,false,true,false,false,true,false,true,true,true], 
 [true,true,false,true,false,false,true,true,true,false,false,false,true,false,true,false,false,true,false,false,true,false,true,false,false,false,true,true,true,true,false,false,true,true,false,true,false,false,true,true,true,true,true,true,true,false,false,true,false,false,true,true,false,false,false,true,true,false,true,true,false,true,false,false,false,false,false,true,false,false,false,true,true,false,false,true,false,true,true,false,true,false,false,false,false,false,true,false,true,true,false,true,true,false,false], 
 [true,false,true,false,false,false,false,false,false,true,true,false,false,true,true,false,true,false,true,true,false,false,true,true,true,true,false,true,false,false,true,true,true,true,false,false,true,false,true,false,false,true,false,true,true,true,false,false,true,false,false,true,false,true,false,true,false,true,false,false,true,false,false,false,true,true,true,false,false,false,true,true,false,true,true,true,false,true,false,false,false,false,true,false,false,false,true,false,true,false,false,false,true,false,false]]

      matrixPerimeter.setMatrix(matrix)
      matrixPerimeter.determinePerimeter()
      expect(matrixPerimeter.getPerimeter()).to.equal(1112)
    })
  })
})
