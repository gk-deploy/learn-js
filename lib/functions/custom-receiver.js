// It is sometimes necessary to call a function with a custom receiver, and
// the function may not already be a property of the desired receiver object.
// It's possible, of course, to add the method to the object as a new property

Functions come with a built-in call method for providing a custom
receiver. Invoking a function via its call method:

f.call(obj, arg1, arg2, arg3)

behaves similarly to calling it directly:

f(obj, arg1, arg2, arg3)

// An object that represents a table of key-value bindings might provide
// a forEach method:

var table = {
  entries: [],
  addEntry: function (key, value) {
    this.entries.push({key: key, value: value})
  },
  forEach: function (f, thisArg) {
    var entries = this.entries
    for (var i = 0; i < entries.length; i++) {
      f.call(thisArg, entry.key, entry.value, i)
    }
  }
}

// This allows consumers of the object to use a method as the callback
// function f of table.forEach and provide a sensible receiver for the method.
// For example, we can conveniently copy the contents of one table into another:


table1.forEach(table2.addEntry, table2)
