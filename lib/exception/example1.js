// Exceptions are run-time errors
// Javascript offers a method for identifying and recovering from erros
// A try block is like test zone for your code.

var alarm = 'we have ha a big problem!!'

try {
  console.log(alarm)
} catch (error) {
  // If something goes wrong, however, the try block throws an error message
  // containing details over to its buddy, the catch block
  console.log('Uh oh..\n' + error)
}
