// Logical operators can make conditional addigments even shorter than ternaries.
var armory = {
  addSword: function (sword) {
    // this.swords = this.swords ? this.swords : []
    // this.swords = this.swords || []
    // The OR operator takes the leftmost 'truthy' value, and if none exists, the last 'falsy' value
    this.swords = [] || this.swords 
    this.swords.push(sword)
  }
}

armory.addSword('hello')
armory.addSword('world')
armory.addSword('this is a test')
console.log(armory.swords)
