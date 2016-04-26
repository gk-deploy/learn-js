var castle = {
  soldiers: 848,
  capacity: 3000,
  keep: {
    soldiers: 19,
    capacity: 40,
    drawbridge: {
      soldiers: 8,
      capacity: 20,
      open: function () {
        console.log('fdkhfkjdhfdjhjBANG!')
      },
      close: function () {
        console.log('fdfhdjshfdkjhdClaCK')
      }
    }
  }
}

var reinforcements = 12

with(castle.keep.drawbridge) {
  if(capacity >= soldiers + reinforcements) {
    open()
    soldiers += reinforcements
    console.log('Drawbridg soldiers ' + soldiers)
    close()
  } else {
    console.log('Reinforcements would require split unit.')
  }
}
