var convertCurrency = function (amount, rateOfConversion) {
  var toCurrencyAmount = 0

  // Convertion
  toCurrencyAmount = rateOfConversion * amount
  // Rounding off
  toCurrencyAmount = parseFloat(toCurrencyAmount).toFixed(2)

  return parseFloat(toCurrencyAmount)
}

module.exports = convertCurrency
