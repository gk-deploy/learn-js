'use strict'

const Observable = function () {}

Observable.prototype.addObserver = function (observer) {
  this.observers = [observer]
}

module.exports = Observable
