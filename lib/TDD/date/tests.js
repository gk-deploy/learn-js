var assert = require('./assert')
var colors = require('colors')
require('./strftime')

var date = new Date(2016,02,09)

try {
  assert('%y should return year as one digit', date.strftime('%y') === '16')
  assert('%Y should return full year', date.strftime('%Y') === '2016')
  assert('%m should return month', date.strftime('%m') === '03')
  assert('%m should return day', date.strftime('%d') === '09')
  console.log((assert.count + ' tests OK').green)
} catch (e) {
  console.log(('Test Fail: ' + e.message).red)
}
