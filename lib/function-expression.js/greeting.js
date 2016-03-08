var greeting;
var newCustomer = true;

if (newCustomer) {
  greeting = function () {
    console.log('Thanks to Visit')
  }
} else {
  greeting = function () {
    console.log('Welcome to back')
  }
}

function closeTerminal(message) {
  message()
}

var f1 = function () {
  return 'f1'
}

var f2 = function () {
  return 'f2'
}

var f3 = function () {
  return 'f3'
}

var puzzlers = [f1, f2, f3]

var res = puzzlers.map(function (f) {
  return f()
})

console.log(res)
