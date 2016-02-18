// A JavaScript object is an unordered collection of properties. Getting and
// setting differnt properties should work in any order, producing the same
// results and roughly the same efficiency.

function report(highScores) {
  var result = ''
  for (var i = 0, n = highScores.length; i < n; i++) {
    var score = highScores[i]
    result += (i + 1) + '.' + score.name + ':' + score.points + '\n'
  }
  return result
}

console.log(report([{ name: 'mike', points: 1213 }, { name: 'karen', points: 4934830 }]))

// we should always take care when executing a for...in loop that the operations
// you perform behave the same regardless of their order.
