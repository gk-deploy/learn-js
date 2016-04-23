function changeInnerHTMLByIdOrExisting(id, update, existing) {
  try {
    var newElement = undefined
    document.getElementById(id).innerHTML = update
  } catch (error) {
    try {
      var elements = document.getElementByTagName('*')
      for (var i = 0, x = elements.length; i < x; i++) {
        if(elements[i].innerHTML === existing) {
          elements[i].innerHTML = update
          id = elements[id].id
          break
        }

        if (i === x) {
          throw new Error('An existing element was not found')
        }
      }
    } catch (error2) {
      console.log(error2.message + '\nCreating new text node')
      newElement = document.createTextNode(update)
    }
  } finally {
    if (newElement !== undefined) {
      console.log('Returnig new text node...')
    } else {
      console.log('Modified element' + (id || existing) + '\ with inner HTML' + update)
    }
  }
}

changeInnerHTMLByIdOrExisting('age', 'Age: 35', 'Age: 34')
