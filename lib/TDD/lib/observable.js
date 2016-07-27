'use strict'

const Observable = function () {
  this.observers = []
}

Observable.prototype.addObserver = function (observer) {
  this.observers.push(observer)
}

module.exports = Observable
