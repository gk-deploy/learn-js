Array.prototype.countCattle = function (kind) {
  var numKind = 0;

  for (var i = 0; i < this.length; i++) {
    if (this[i].type == kind) {
      numKind++
    }
  }

  return numKind
}

Object.prototype.noCalvesYet = function () {
  return (this.type == 'cow' && !this.hadCalf ? true: false)
}

Array.prototype.countForBreeding = function () {
  var numToBreed = 0

  for (var i = 0; i < this.length; i++) {
    if (this[i].noCalvesYet()) {
      numToBreed++
    }
  }

  return numToBreed
}

var canyonCows = [
  { name: "Bessie", type: 'cow', hadCalf: 'Burt'},
  { name: "Bessie", type: 'bull', hadCalf: 'Burt'},
  { name: "Bessie", type: 'cow', hadCalf: 'Burt'},
  { name: "Bessie", type: 'cow', hadCalf: 'Burt'},
  { name: "Bessie", type: 'calf', hadCalf: null},
]

var forestCows = [
  {name: 'Legolas', type: 'calf', hadCalf: null},
  {name: 'Gimili', type: 'build', hadCalf: null},
  {name: 'Arwen', type: 'calf', hadCalf: null},
  {name: 'Galardriel', type: 'cow', hadCalf: null},
  {name: 'Eowyn', type: 'cow', hadCalf: 'Legolas'}
]

console.log(canyonCows.countCattle('cow'))
console.log(forestCows.countForBreeding())
