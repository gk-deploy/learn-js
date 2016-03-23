var Tornado = function (category, affectedAreas, windGust) {
  this.category = category
  this.affectedAreas = affectedAreas
  this.windGust = windGust
}

Tornado.prototype.valueOf = function() {
  var sum = 0
  for (var i = 0; i < this.affectedAreas.length; i++) {
    sum += this.affectedAreas[i][1]
  }
  return sum
}

Tornado.prototype.toString = function() {
  var list = ''
  for (var i = 0; i < this.affectedAreas.length; i++) {
    if (i < this.affectedAreas - 1) {
      list += this.affectedAreas[i][0] + ', ' 
    } else {
      list += 'and ' + this.affectedAreas[i][0]
    }
  }
  return 'This tornado has been classified as an ' + this.category +
         ', with wind gust up to ' + this.windGust + 'mph. Affected areas are: ' + list + ', potentially affeting a population of ' + this.valueOf() + '.'
}

Object.prototype.findOwnerOfProperty = function (propName) {
  var currentObject = this
  while (currentObject !== null) {
    if (currentObject.hasOwnProperty(propName)) {
      return currentObject
    } else {
      currentObject = currentObject.__proto__
    }
  }
  return 'No property found!'
}

var cities = [['Mexico City', 5000], ['SLP', 3000], ['Queretaro', 2098]]
var twister = new Tornado('F5', cities, 220)

console.log(twister.valueOf())
console.log(twister.toString())
console.log(twister.findOwnerOfProperty('toString'))

