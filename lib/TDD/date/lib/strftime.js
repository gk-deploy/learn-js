String.prototype.trim = function () {
  var count = 0

  var deleteSpace = function (start, cadAux, sub) {
    var increment = 1
    var tam = cadAux.length
    var cad = cadAux

    if (start !== 0) {
      increment = -1
      tam = 0
    } 
    
    for (var i = start; i != tam; i+= increment) {
      if (cad[i] === ' ') {
        cad = cad.substring(sub,cad.length+(sub-1))
        tam = cad.length
        i = i + (sub * -1)
      } else {
        break
      }
    }
    return cad
  }

  self = deleteSpace(0, this, 1)

  return deleteSpace(self.length-1, self, 0)
}

Date.prototype.strftime = (function () {
  function strftime(format) {
    var date = this
    return (format + "").replace(/%([a-zA-Z])/g, function (m, f) {
      var formatter = Date.formats && Date.formats[f]
      if (typeof formatter === 'function') {
        return formatter.call(Date.formats, date)
      } else if (typeof formatter === 'string') {
        return date.strftime(formatter)
      }
      return f
    })
  }
  function zeroPad(num) {
    return (+num < 10 ? '0' : '') + num
  }

Date.formats = {
  d: function (date) {
    return zeroPad(date.getDate())
  },

  m: function (date) {
    return zeroPad(date.getMonth() + 1)
  },

  y: function (date) {
    return zeroPad(date.getYear() % 100)
  },

  Y: function (date) {
    return date.getFullYear()
  },

  j: function (date) {
    var jan1 = new Date(date.getFullYear(), 0, 1)
    var diff = date.getTime() - jan1.getTime()

    return Math.ceil(diff / 86400000)
  },

  F: "%Y-%m-%d",
  D: "%m/%d/%y"
}
  return strftime
}())
