var colors = require('colors')

module.exports = function (name, tests) {
  var successful = 0
  var testCount = 0

  for (var test in tests) {
    if (!/^test/.test(test)) {
      continue
    }
    testCount++
    try {
      tests[test]()
      console.log(test.green)
      successful++
    } catch (e) {
      console.log((test + ' failed: ' + e.message).red)
    }
  }
  var resume = testCount + ' tests, ' + (testCount - successful) + ' failures'

  successful == testCount ? console.log(resume.green) : console.log(resume.red)
}
