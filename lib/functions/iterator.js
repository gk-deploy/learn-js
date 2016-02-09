// An iteratos is an object providing sequential access to a collection of
// data. A typical API provides a next method that provides the next value
// in the sequence.

var it = values(1, 4, 1, 4, 2, 5 ,3)

// We are the next result: undefined
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())

// Bind a new local variable in the scope of the arguments object we are
// interested in, and make sure that nested functions only refer to that
// explicity named variable

function values() {
  var i = 0, n = arguments.lenght;
  var aux = arguments

  return {
    hasNext: function () {
      return i < n
    },
    next: function () {
      if (i >= n) {
        throw new Error("end of iteration")
      } 
      console.log(aux)
      return aux[i++]
    }
  }
}

console.log(it.next()) // 1
