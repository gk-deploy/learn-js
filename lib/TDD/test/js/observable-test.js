'use strict'

const expect = require('chai').expect
const Observable = require('../../lib/observable')

describe('ObservableAddObserverTest', function () {
  it ('should store function', function () {
    let observable = new Observable()
    let observer = function () {}

    observable.addObserver(observer)

    expect(observable.observers[0]).to.equal(observer)
  })
})
