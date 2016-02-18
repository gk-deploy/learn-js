// A JavaScript object is a table mapping string property names to values.
// This makes objects pleasantly lightweight for implemeting dictionaries:
// variable-sized collections mapping strings to values.

var dict = { path: 24, montes:23, mike: 37, andrea: 21}
var friends = []


for (var name in dict) {
  friends.push(name + ":" + dict[name])
}

console.log(friends)

// Deceptively, since we can add propertie to any type of JavaScript object 
// this usage pattern will sometimes appear to work:

var dictAux = {}

dictAux.alice = 34
dictAux.bob = 4
dictAu.chirs = 3

Array.prototype.first = function () {
  return this[0]
}

Array.prototype.last = function () {
  return this[this.length - 1]
}

var names = []

for (var name in dictAux) {
  names.push(name)
}

console.log(names)
