// In JavaScript, functions, methods, and constructors ares just three
// different usage patterns of one single construct: functions

function showMsg(message) {
  return "You said, " + message
}

console.log(showMsg('Test simple functions'))

// This does exactly what it looks like: It calls the hello function and
// binds the message parameter to its given argument

var obj = {
  hello: function () {
    console.log("Hello, " , this.username)
  },
  username: "Miguel Angel Galicia"
}

obj.hello()

var obj2 = {
  hello: obj.hello,
  username: "Boo Radley"
}
obj2.hello()

function myAge(age) {
  console.log('Your age is ', + this.age)
}

var mike = {
  myAge: myAge,
  age: 18
}

var yoe = {
  myAge: myAge,
  age: 8
}

mike.myAge()
yoe.myAge()

// The third use of functions is as constructors. Just like methods and
// plain functions, constructors are defined with function
function People(name, age) {
  this.name = name
  this.age = age
}

var pepito = new People('Pepito', 13)
console.log(pepito.name)
