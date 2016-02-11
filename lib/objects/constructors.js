function UserTest(name, passwordHash) {
  'use strict'
  this.name = name
  this.passwordHash = passwordHash
}

var u = new UserTest('mike', 'fhdkhfdj')
console.log(u)

// The function are fragiles, when used with new it works as ecpected, but 
// when used as a normal function it fails. A more robust approach is to
// provide a function that works as a constructor no matter how it's called.
// An easy way to implement this is to check that the recevier value is a
// proper instance of User:

function User(name,password) {
  if (!(this instanceof User)) {
    return new User(name, password)
  }
  this.name = name
  this.password = password
}

var mike = User('mike', 'hello')
var me = new User('me', 'me')

console.log(mike instanceof User)
console.log(me instanceof User)

// One downside to this pattern is that it requires an extra function call,
// so it is a bit more expensive. A somewhat more approach makes use of ES5's Object.create:

function Car(color, model) {
  var self = this instanceof Car ? this : Object.create(User.prototype)
  self.color = color
  self.model = model

  return self
}

var bocho = Car('white', 'mono')
console.log(bocho)

