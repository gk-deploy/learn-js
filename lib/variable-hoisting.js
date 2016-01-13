/* JavaScript does not support block scoping: Variable definition are not scoped */
/* to their nearest enclosing statement or block, but rather to their containg */
/* function. */

function isWinner (player, others) {
  var highest = 0

  for (var i = 0; i < others.length; i++) {
    var player = others[i]
    if (player.score > highest) {
      highest = player.score
    }
  }
  return player.score > highest
}

var player = {score: 100}
var others = [{score: 9}, {score: 4}, {score: 14}, {score: 5}]

isWinner(player, others)

function test () {
  var x = 'thig'
  var res = []

  res.push(x)

  try {
    throw 'exception'
  } catch (x) {
    x = 'catch'
  }

  res.push(x)
  debugger
  return res
}

test()
