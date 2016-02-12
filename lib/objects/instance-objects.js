// Understanding the one-to-many relationship between a prototype object and
// its instaces is crucial to implementing objects that behave correctly.

// function Tree(x) {
//   this.value = x
// }

// Tree.prototype = {
//   children: [],
//   addChild: function (x) {
//     this.children.push(x)
//   }
// }

// Each time we call addChild, we append a value to Tree.prototype.children,
// which contains the nodes in the order of any calls to addChild anywhere.
// The correct way to implement the Tree class is to create a separate
// children way for each instance object:

function Tree(x) {
  this.value = x
  this.children = [] 
}

Tree.prototype = {
  addChild: function (x) {
    this.children.push(x)
  },
  showTree: function () {
    return "Hello my value is :" + this.value
  }
}

Tree.prototype.getChilds = function () {
  return this.children
}

var left = new Tree(2)
left.addChild(1)
left.addChild(3)

var right = new Tree(6)
right.addChild(4)
right.addChild(5)

var top = new Tree(4)
top.addChild(left)
top.addChild(right)

console.log(top.children)
console.log(top.showTree())
console.log(top.getChilds())


