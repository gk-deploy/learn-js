// Functions come with a built-in apply method, which is similar to their
// call method. This method takes an array of arguments and calls the function as if each element of the array were an individual argument of the
// call. In addition that specifies the binding fo this for the function
// being called.

// Example:

var scores = getAllScores()
average.apply(null, scores)

// The apply method can be used on variadic methods. too. For example, a
// buffer object might contain a variadic append method for adding entries
// to its internal state

var buffer = {
  state: [],
  append: function () {
    for (var i = 0, n = arguments.length; i < n; i++) {
      this.state.push(arguments[i])
    }
  }
}

// The append method can be called with any number of arguments

buffer.append("hello, ")
buffer.append(1,'byr')
buffer.append([],{},'this a test')

console.log(buffer.state)

buffer.append.apply(buffer, getInputStrings())
