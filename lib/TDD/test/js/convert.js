var expect = require('chai').expect
var convertCurrency = require('../../lib/convertCurrency')

describe('convertCurrency()', function () {
  it('100 INR should be equal to $ 1.59', function () {
    expect(convertCurrency(100, 1/63)).to.equal(1.59)
  })
})
