// Storing methods on a prototype makes them available to all instances
// without requiring multiple copies of the functins that implement them or
// extra properties on each instance object.

// Prefer stoing methos on prototypes over storing them on instance objects.

function Thompson(automata) {
  this.automata = automata || {}

  this.toString = function () {
    return '[I am an ' + this.automata + ']'
  }
}

Thompson.prototype.getAutomata = function () {
  return this.automata
}

Thompson.prototype.parser = function () {
  // TODO: Create parser but to find nodes.
}

var t = new Thompson({states:[{value:1, rel:[]}, {value:2, rel:[]}]})
console.log(t.toString())
