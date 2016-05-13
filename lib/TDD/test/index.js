require('../lib/strftime')
var assert = require('../lib/assert')
var testCase = require('../lib/testCase')

testCase('strftime tests', {
  setUp: function () {
    this.date = new Date(2016, 03, 09)
  },
  'test format specifier %Y': function () {
    assert('%Y should return full year', this.date.strftime('%Y') === '2016')
  },
  'test format specifier %m': function () {
    assert('%m should return month', this.date.strftime('%m') === '04')
  },
  'test format specifier %d': function () {
    assert('%d should return day', this.date.strftime('%d') === '09')
  },
  'test format specifier %y': function () {
    assert('%y should return year with two digits', this.date.strftime('%y') == '16')
  },
  'tests format shorthand %F': function () {
    assert('%F should act as %Y-%m-%d', this.date.strftime('%F') === '2016-04-09')
  },
  'test trim should remove leading white-space': function () {
    assert('should remove leading white-spave', 'a string' === '   a string'.trim())
  },
  'test trm should remove white-space end': function () {
    assert('should remove white-space end string', 'a string a' === ' a string a                '.trim())
  }
})
