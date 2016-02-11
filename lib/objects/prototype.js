// Prototype involve three separate but related accessors, all of which are
// named with some variation on the word prototype.
// C.prototype is used to establish the prototype of objects created by new C()
// Object.getPrototypeOf(obj) is the standard ES5 mechanism for retrieving
// obj's prototype object.
// obj.__proto__ is a nonstandard mechanism for retrieving obj's prototype object.

function User(name, passwordHash) {
  this.name = name
  this.passwordHash = passwordHash
}

User.prototype.toString = function () {
  return "[User " + this.name + "]"
}

User.prototype.checkPassword = function (password) {
  return hash(password) === this.passwordHash
}

var aux = new User('test','fjdhfd9034nfd8r')

// The User function comes with a default prototype property, containing an
// object that starts out more or less empty

// Classes in JavaScript are essentially the combination of a constructor
// funciton (User) and a prototype object used to share methods between
// instances of the class (User.prototype)
