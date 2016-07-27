'use strict'

const expect = require('chai').expect
const Observable = require('../../lib/observable')

describe('ObservableAddObserverTest', function () {
  it ('should store function', function () {
    let observable = new Observable()
    let observers = [function () {}, function () {}]

    observable.addObserver(observers[0])
    observable.addObserver(observers[1])

    expect(observable.observers[0]).to.equal(observers[0])
  })
})
