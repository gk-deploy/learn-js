Array.prototype.countCattle = function (kind) {
  var numKind = 0;

  for (var i = 0; i < this.length; i++) {
    if (this[i].type == kind) {
      numKind++
    }
  }

  return numKind
}

var canyonCows = [
  { name: "Bessie", type: 'cow', hadCalf: 'Burt'},
  { name: "Bessie", type: 'bull', hadCalf: 'Burt'},
  { name: "Bessie", type: 'cow', hadCalf: 'Burt'},
  { name: "Bessie", type: 'cow', hadCalf: 'Burt'},
  { name: "Bessie", type: 'calf', hadCalf: null},
]

console.log(canyonCows.countCattle('cow'))
