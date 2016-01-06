
// Functions that keep track of variables from their containig scopes are known as closures.
// Closures are one of JS most elegant and expressive features

// The first fact is that JS allows you to refer to variables that were defined
// outside of the current function

function makeSandwich() {
  var magicIngredient = 'peanut butter'
  function make(filling) {
    return magicIngredient + ' and ' + filling
  }
  return make('jelly')
}

show(makeSandwich())

// The second fact is that functions can refer to variables defined in outer 
// functions even after those outer functions have returned

function sandwichMaker() {
  var magicIngredient = 'peanut butter'
  function make(filling) {
    return magicIngredient + ' and ' + filling
  }
  return make
}

var f = sandwichMaker() 
show(f('bananas'))

// How does this work? The answer is that JS function values contain more
// information than just the code required to execute when they're called.
// They also internally store any varyables they may refer to that are defined
// in their enclosing scopes.

// A function can refer to any variabls in its scope, including the parameters
// and variables of outer functions

function sandwichMaker(magicIngredient) {
  function make(filling) {
    return magicIngredient + ' and ' + filling
  }
  return make
}

var hamAnd = sandwichMaker('ham')
show(hamAnd('cheese'))

function show(object) {
  console.log(object)
}

// JavaScript even provides a more convenient literal syntax for constructing
// closures, the function expression:

function makeSanwich(magicIngredient) {
  // It's not even necessary to name the function since we are only evaluanting it
  // to produce a new function value
  return function(filling) {
    return magicIngredient + ' and ' + filling
  }
}

// The third and final fact to learn about closures is that they can update
// the values of outer variables.

function box() {
  var val = undefined
  return {
    set:  function(newVal) { val = newVal },
    get: function() { return val },
    type: function() { return typeof val }
  }
}
var b = box()

show(b.type())
show(b.set(98.4))
show(b.get())
show(b.type())

