Array.prototype.countType = function (type) {
  var count = 0
  for( var i = 0, x = this.length; i < x; i++) {
    if (this[i] === type) {
      count++
    }
  }
  return count
}

Array.prototype.removeAll = function (item) {
  var removed = []
  for (var i = 0, x = this.length; i < x; i++) {
    if (this[i] === item) {
      removed.push(item)
      this.splice(i, 1)
      i--
    }
  }
  return removed
}

var colors = ['red', 'red', 'yellow', 'red']
// console.log(colors.countType('red'))
// console.log(colors.removeAll('red'))
// console.log(colors)

for (p in colors) {
  console.log(p)
}
