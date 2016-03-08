var vehicle1 = {
  type: 'Motorboat',
  capacity: 6,
  storedAt: 'Ammunition Depot'
}

var vehicle2 = {
  type: 'Jet Ski',
  capacity: 1,
  storedAt: 'Reef'
}

var vehicle3 = {
  type: 'Submarine',
  capacity: 8,
  storedAt: 'Underwater Outpost'
}

var vehicles = [vehicle1, vehicle2, vehicle3]

var findVehicle = function (name, list) {
  var storedAt;

  for (var i = 0; i < list.length; i++) {
    if (name === list[i].type) {
      storedAt = list[i].storedAt;
      break;
    }
  }

  return storedAt;
}

console.log(findVehicle('Submarine', vehicles))

vehicle1.capacity = 4
vehicle2.submersible = false
vehicle3.weapon = 'Torpedoes'
vehicle1.submersible = false
vehicle2.weapon = 'Lasers'
vehicle3.capacity = vehicle3.capacity * 2
vehicle1.weapon = 'Rear-Mounted Slingshot'
vehicle3.submersible = true

vehicle1['# of weapons'] = 1
vehicle2['# of weapons'] = 4
vehicle3['# of weapons'] = 8

console.log(vehicle1, vehicle2, vehicle3)
