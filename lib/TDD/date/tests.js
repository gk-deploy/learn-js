var assert = require('./assert')
var testCase = require('./testCase')

require('./strftime')

var date = new Date(2016,02,09)

testCase('strftime tests', {
  'test format specifier %Y': function () {
    assert('%Y should return full year', date.strftime('%Y') === '2016')
  },
  'test format specifier %m': function () {
    assert('%m should return month', date.strftime('%m') === '03')
  },
  'test format specifier %d': function () {
    assert('%d should return day', date.strftime('%d') === '09')
  },
  'test format specifier %y': function () {
    assert('%y should return year with two digits', date.strftime('%y') == '16')
  },
  'tests format shorthand %F': function () {
    assert('%F should act as %Y-%m-%d', date.strftime('%F') === '2016-03-09')
  }
})
