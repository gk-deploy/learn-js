function point(x, y) {
  if (x === undefined) {
    x = 320
  }

  if (y === undefined) {
    y = 240
  }

  return { x:x, y:y }
}

console.log(point(0,undefined))
