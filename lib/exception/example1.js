// Exceptions are run-time errors
// Javascript offers a method for identifying and recovering from erros
// A try block is like test zone for your code.

try {
  console.log(alarm)
} catch (error) {
  // If something goes wrong, however, the try block throws an error message
  // containing details over to its buddy, the catch block
  console.log('Uh oh..\n' + error)
}

//Javascript can throw multiple useful error types that allow a catch
//block to handle errors more gracefully

var list = {}

try {
  var newHallOfFame = ['Dask Frostring', 'Render Tallborn']
  // Use conditionals and the thorw kerword to craft the right exception
  // scenario based on your expectations.
  if (list === undefined) {
    throw new ReferenceError()
  }
  if ((list instanceof Array) === false) {
    throw new TypeError()
  }
  list.concat(newHallOfFame)
} catch (error) {
  if (error instanceof ReferenceError) {
    console.log(error + '\nThe HoF roster does not exist as list')
  } else {
    if (error instanceof TypeError) {
      console.log(error + '\n Alas, list exists, but is no longer an Array')
    }
  }
}
