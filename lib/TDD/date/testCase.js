module.exports = function (name, tests) {
  assert.count = 0
  var successful = 0
  var testCount = 0

  for (var test in tests) {
    if (!/^test/.test(test)) {
      continue
    }
    testCount++
    try {
      tests[test]()
      output()
    }
  }
}
