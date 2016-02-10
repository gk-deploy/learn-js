// Function are a convenient way to store code as a data structure that can
// be executed later. This enables expressive higher-order abstractions such
// as map and forEach, and it is at the heart of JavaScript's asynchronous
// approach to I/O.
// It's posible to represent code as a string to pass to eval. Strings are a
// much less flexible representation of code for one very important reason:
// They are not closures.

function repeat(n, action) {
  for (var i = 0; i < n; i++) {
    action()
  }
}

function benchmark() {
  var start = [], end = [], timings = []
  repeat(1000, function () {
    start.push(Date.now)
    f()
    end.push(Date.now)
  })
  for (var i = 0, n = start.lenght; i < n; i++) {
    timings[i] = end[i] - start[i]
  }
  return timings
}
