var careers = { 
  Angular: {
    experience: 2, soil: "2k", place: 'San Francisco'
  },
  Mongodb: {
    experience: 2, soil: "2k", place: 'San Francisco'
  },
  React: {
    experience: 1, soil: '1k', place: 'Michigan'
  },
  addPosition: function (name, experience, soil, place) {
    this[name] = {experience, soil, place}
  },
  deletePosition: function (name) {
    this[name].name = name
    var temp = this[name]
    delete this[name]
    return temp
  },
  countSanFrancisco: function () {
    var count = 0
    for (key in careers)
      if ( careers[key].place === 'San Francisco' )
        count++
    return count
  }
}

console.log(careers.countSanFrancisco())

var superBlinders = [
  ['Firestorm', 4000],
  ['Solar Death Ray', 6000],
  ['Supernova', 12000]
]

var lightHouseRock = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: 'Underwater Outpost',
  numRangers: 3,
  ranger1: {
    name: 'Nick Walsh',
    skillz: 'magnification burn',
    station: 2
  },
  ranger2: {
    name: 'Drew Barontini',
    skillz: 'uppercut launch',
    station: 3
  },
  ranger3: {
    name: 'Christine Wonge',
    skillz: 'bomb defusing', 
    station: 1
  },
  addRanger: function (name, skillz, station) {
    this.numRangers++
    this['ranger' + this.numRangers] = {name, skillz, station}
  },
}

lightHouseRock.addRanger('test', 'mamer', 3)
console.log(lightHouseRock)

lightHouseRock.addBuld = function (name, wattage) {
  this.weaponBulbs.push([name, wattage])
}

lightHouseRock.addBuld('Blasterbright', 5000)
lightHouseRock.addBuld('Sight Slayer', 1800)

console.log(lightHouseRock)
console.log(lightHouseRock.weaponBulbs)
