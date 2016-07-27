'use strict'

const expect = require('chai').expect
const Observable = require('../../lib/observable')

describe('Observable Module', function () {
  describe('addObservable()', function () {
    it ('should store function', function () {
      let observable = new Observable()
      let observers = [function () {}, function () {}]

      observable.addObserver(observers[0])
      observable.addObserver(observers[1])

      expect(observable.observers[0]).to.equal(observers[0])
    })
  })

  describe('hasObservable()', function () {
    it('should return true when has observer', function () {
      let observable = new Observable()
      let observer = function () {}

      observable.addObserver(observer)

      expect(observable.hasObserver(observer)).to.equal(true)
    })

    it('should return false when no observers', function () {
      let observable = new Observable()
      expect(observable.hasObserver(function () {})).to.equal(false)
    })
  })
})
