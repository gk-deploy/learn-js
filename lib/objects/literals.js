// The simple types of JavaScrip are numbers, string, booleans, null and
// undefined. All other values are objects. Numbers, string, and booleans are
// object-like in that they have methods, but they are immutable. In JavaScript
// , arrays are objects, functions are objects, regular expressions are
// objects, and objects are objects.

// An object is a container of properties, where a properyt has a name and
// a value. Objects in JavaScript are class-free. There is no constraint on
// the names of new properties or no the values of properties. Objects are
// useful collecting and organizing data. These can contain other objects.
//
// Object literas provide a very convenient notation for creating new object
// values. It is a  pair of curly braces sorrounding zero or more name/value pairs.

var flight = {
  airline: 'Oceanic',
  number: 825,
  departure: {
    IATA: 'SYD',
    time: 'now',
    city: 'Mexico'
  },
  arrival: {
    IATA: 'SYD',
    time: 'now',
    city: 'SLP'
  }
}

console.log(flight)

// Retrieval
// The . notation is preferred because it is more compact and it reads better:

console.log(flight.departure.time)

// The undefined value is produced if an attempt is made to retrieve a
// nonexistent memeber, but that the || operator can be used to fill in
// default values

var status = flight.status || 'unknown'

// Update
// A value in an object can be updated by assignment. If the property name
// alredy exists in the object, the property value is replaced , if the object
// does not already have, the object is augmented

flight.equipment = {
  model: 'Boeing 777'
}

console.log(flight)

// Reference
// Objects are passed around by reference. They are never copied:

var stooge = {
  'first-name': 'jerome',
  'last-name': 'howard'
}

var x = stooge
x.nickname = 'Curly'
console.log(stooge)

