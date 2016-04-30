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

console.log(Users.getOnlyUser(0))

