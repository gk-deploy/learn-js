var Users = (function (){
  var users = []

  var addUser = function (user) {
    users.push(user)
  }

  var getAllUsers = function () {
    return users
  }

  return {
    getOnlyUser: function (id) {
      return users
    }
  }
})()

var CAVESOFCLARITY = (function () {
  var treasureChests = 3
  var bats = 354

  return {
    stalactites: 4249,
    stalagmites: 8933,
    SECRET: {
      openChest: function () {
        treasureChests--
        console.log('DA DAAAA')
      }
    },
    getBats: function () {
      return bats
    }
  }
})()

console.log(CAVESOFCLARITY)
