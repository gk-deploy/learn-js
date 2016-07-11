'use strict'

const expect = require('chai').expect

describe('PropertyEnumerationTest', function () {
  it('should enumerate shadowed object properties', function () {
    let object = {
      // Properties with DontEnum on Object.prototype
      toString: 'toString',
      toLocaleString: 'toLocaleString',
      valueOf: 'valueOf',
      hasOwnProperty: 'hasOwnProperty',
      isPrototypeOf: 'idPrototypeOf',
      propertyIsEnumerable: 'propertyIsEnumerable',
      constructor: 'constructor'
    }

    let result = []

    for (let property in object) {
      result.push(property)
    }

    expect(result.length).to.equal(7)
  })

  it('should enumerate shadowed function properties', function () {
    let object = function () {}

    // Additional properties with DontEnum on
    // Function.prototype
    object.prototype = 'prototype'
    object.call = 'call'
    object.apply = 'apply'

    let result = []

    for (let property in object) {
      result.push(property)
    }

    expect(result.length).to.equal(3)
  })
})
