var superBlinders = [
  ['Firelight', 4000],
  ['Solar Death Ray', 6000],
  ['Supernova', 12000]
]

var lightHouseRock = {
  gateClosed: true,
  bulbs: [200, 500, 750],
  capacity: 30,
  secretPassageTo: 'Underwater Outpost',
  numRanger: 0
}
delete lightHouseRock.bulbs

lightHouseRock.weaponBulbs = superBlinders

// Name value of the bulb with the highest wattage.
// console.log(lightHouseRock.weaponBulbs[2][0])

function addRanger(location, name, skillz, station) {
  lightHouseRock.numRanger += location
  lightHouseRock['ranger'+lightHouseRock.numRanger] = {
    name, skillz, station
  }
}

addRanger(1, 'Nick Walsh', 'magnification burn', 2)
addRanger(1, 'Drew Barontini', 'uppercut launch', 3)
addRanger(1, 'Christine Wong', 'bomb defusinf', 1)

console.log(lightHouseRock)

var dontPanic = function dontPanic() {
  var list = 'Avast, me hearties!\nThere be Pirates nearby! Stations!\n'

  for (var i = 1; i <= lightHouseRock.numRanger; i++) {
    list += lightHouseRock['ranger'+i].name + ', man the ' + lightHouseRock.weaponBulbs[(lightHouseRock['ranger'+i].station)-1][0] + '!\n'
  }

  return list
}

console.log(dontPanic())
