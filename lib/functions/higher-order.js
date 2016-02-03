// Higher-order functions are nothing more than functions that take other
// functions as arguments or return fucntions as their result. Taking
// a functions as an argument (often referred to as a callback function because it is 'called back') by the higher-oder function

function compareNumbers(x, y) {
  if (x < y) return -1
  if (x > y) return 1
  return 0
}
var res = [2,5,3,1,1,6,4].sort(compareNumbers)

var test = [4,25,6,12,2].sort((x,y) => {
  if (x < y) return -1
  if (x > y) return 1
  return 0
})

// Many common operations on arrays have lovely higher-order abstractions that
// are worth familiarizing yourself with.
var users = ["Pepe", "Oso", "Pablo"]
var upperUser = []

for (var i=0; i<users.length; i++) {
  upperUser[i] = users[i].toUpperCase()
}

// With the map method of arrays, we can completely eliminate the loop detail
// , implementing just the element-by-element transformation with a local function:
var dogs = ["Fred", "Wilma", "Pebbles"]
var upper = dogs.map( (dog) => {
  return dog.toUpperCase()
})

// Callbacks
var aIndex = "a".charCodeAt(0) // 97

function buildString(n, callback) {
  var result = ""
  for (var i = 0; i < n; i++) {
    result += callback(i)
  }
  return result
}

var alphabet = buildString(16, (i) => {
  return String.fromCharCode(aIndex + i)
})
// console.log(alphabet)

var digits = buildString(10, (i) => {
  return i
})
// console.log(digits)

var random = buildString(8, () => {
  return String.fromCharCode(Math.floor(Math.random()*26) + aIndex)
})
console.log(random)
