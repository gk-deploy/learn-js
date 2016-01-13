function wrapElements (a) {
  var result = [], i, n
  for (i = 0, n = a.length; i < n; i++) {
    result[i] = function () { return a[i] }
  }
  return result
}

var wrapped = wrapElements([10, 20, 30, 40, 50])
var f = wrapped[0]

// The solution is to force the creation of a local scope by creating a nested
// function and calling it right away

function wrapElementsI (a) {
  var result = [], i, n
  for (i = 0, n = a.length; i < n; i++) {
    (function (j) {
      result[i] = function () { return a[j] }
    })(i)
  }
  return result
}

var aux = wrapElementsI([10, 20, 30, 40, 50])
var f = aux[3]
console.log(f())
