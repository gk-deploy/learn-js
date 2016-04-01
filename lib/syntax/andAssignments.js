// Logical operators can make conditional addigments even shorter than ternaries.
var armory = {
  addSword: function (sword) {
    this.swords = this.swords || []
    this.swords.push(sword)
  }
}

armory.retrieveSword = function (request) {
  var index = this.swords.indexOf(request)
  return (index >= 0) ? this.swords.splice(index, 1)[0] : 'The request' + request + 'does not exist'
}

armory.addSword('abc')
armory.addSword('bc')
armory.addSword('c')

var aux1 = true
var aux2 = true

var test = aux1 && aux2 && armory.retrieveSword('c')

console.log(armory.swords)
console.log(test)
