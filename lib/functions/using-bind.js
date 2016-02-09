// It's easy to extract a method of an object and pass the extracted function
// directly as a callback to a higher-order function.

// Example: A string buffer object that stores strings in an array that can
// be concatenated later:

var buffer = {
  entries: [],
  add: function (s) {
    this.entries.push(s)
  },
  concat: function () {
    return this.entries.join("")
  }
}

var source = ['hello', '-', 'world']

// source.forEach(buffer.add, buffer)
// console.log(buffer.join())
source.forEach((s) => {
  console.log(s)
  buffer.add(s)
})

// Using bind
source.forEach(buffer.add.bind(buffer))
console.log(buffer.concat())
