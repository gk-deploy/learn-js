'use strict'

const expect = require('chai').expect

describe('Array Loop', function () {
  it('Looping should iterate over all items', function () {
    let array = [1, 2, 3, 4, 5, 6]
    let result = []

    // Standard for-loop
    for (let i = 0, l = array.length; i < l; i++) {
      result.push(array[i])
    }

    expect(result.join('')).to.equal('123456')
  })

  it('for-in loop should iterate over all items', function () {
    let array = [1, 2, 3, 4, 5, 6]
    let result = []

    for (let i in array) {
      if (typeof array[i] === 'number') {
        result.push(array[i])
      }
    }

    expect(result.join('')).to.equal('123456')
  })
})
