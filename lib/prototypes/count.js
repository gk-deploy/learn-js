String.prototype.countAll = function (letter) {
  var letterCount = 0

  for (var i = 0; i < this.length; i++) {
    if (this.charAt(i).toUpperCase() == letter.toUpperCase()){
      letterCount++
    }
  }

  return letterCount
}

var sen = 'Come on, get up and fight'

console.log(sen.countAll('o'))
