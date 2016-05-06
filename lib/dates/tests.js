var assert = require('./assert')
require('./strftime')

var date = new Date(2016,01,01)

try {
  assert('%y should return year as one digit', date.strftime('%y') === '16')
  assert('%Y should return full year', date.strftime('%Y') === '2016')
  assert('%m should return month', date.strftime('%m') === '01')
  console.log(assert.count + ' tests OK')
} catch (e) {
  console.log('Test Fail: ' + e.message)
}
