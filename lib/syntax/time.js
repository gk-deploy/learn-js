function SpeedTest (testImplement, testParams, repetitions) {
  this.testImplement = testImplement
  this.testParams = testParams
  this.repetitions = repetitions || 10000
  this.average = 0
}

SpeedTest.prototype = {
  startTest: function () {
    var beginTime, endTime, sumTimes = 0

    if (this.testImplement(this.testParams) === false) {
      console.log('Test failed with those parameters')
      return
    }

    for (var i = 0, x = this.repetitions; i < x; i++) {
      beginTime = +new Date()
      this.testImplement(this.testParams)
      endTime = +new Date()
      sumTimes += endTime - beginTime
    }

    this.average = sumTimes / this.repetitions
    return console.log('Average execution across ' + 
                       this.repetitions + ': ' +
                       this.average)
  }
}

var IP = ['Nipping Global Variable', 'Sneaky Florin', 'Bulging Blocking Script']
var GH = ['Switch Blocks', 'Pesky Gnat', 'Aiedra']
var inhabitants = [IP, GH]

function populationGetter (popn) {
  var list = ''
  for (var i = 0, x = popn.length; i < x; i++) {
    for (var j = 0; j < popn[i].length; j++) {
      list += (popn[i][j] + ', ')
    }
  }
  return list
}

var concatTest = new SpeedTest(populationGetter, inhabitants, 10000)

console.log(concatTest.startTest())
