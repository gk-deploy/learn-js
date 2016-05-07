var colors = require('colors')

module.exports = function (name, tests) {
  var successful = 0
  var testCount = 0
  var hasSetup = typeof tests.setUp === 'function'
  var hasTeardown = typeof tests.tearDown === 'function'

  for (var test in tests) {
    if (!/^test/.test(test)) {
      continue
    }
    testCount++
    try {
      if (hasSetup) {
        tests.setUp()
      }
      tests[test]()
      console.log(test.green)
      if (hasTeardown) {
        tests.tearDown()
      }
      // If the tearDown method throws an error, it is considered a test failure,
      // so we don't count success until all methods have run successfully
      successful++
    } catch (e) {
      console.log((test + ' failed: ' + e.message).red)
    }
  }
  var resume = testCount + ' tests, ' + (testCount - successful) + ' failures'

  successful == testCount ? console.log(resume.green) : console.log(resume.red)
}
