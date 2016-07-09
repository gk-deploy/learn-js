'use strict'

const expect = require('chai').expect

describe('Object.hasOwnProperty', function () {
  it('Looping should only iterate over own properties', function () {
    let person = {
      name: 'Miguel Angel',
      profession: 'Programmer',
      location: 'Mexico'
    }

    let result = []

    for (let prop in person) {
      if (person.hasOwnProperty(prop)) {
        result.push(prop)
      }
    }

    let expected = ['location', 'name', 'profession']

    expect(result.sort()).to.equal(expected)
  })
})
