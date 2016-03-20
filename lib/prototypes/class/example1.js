function Fencepost(x, y, postNum) {
  this.x = x
  this.y = y
  this.postNum = postNum
  this.connectionsTo = []

}

Fencepost.prototype = {
  sendRopeTo: function (connectdPost) {
    this.connectionsTo.push(connectdPost)
  }
}

Fencepost.prototype.removeRope = function (removeTo) {
    var temp = []
    for (var i = 0; i < this.connectionsTo.length; i++) {
      if (this.connectionsTo[i].postNum != removeTo) {
        temp.push(this.connectionsTo[i])
      }
    }
    this.connectionsTo = temp
}

var post1 = new Fencepost(-3, 4, 18)
var post2 = new Fencepost(-5, -1, 19)

module.exports = Fencepost
