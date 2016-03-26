var isArthur = true
var isKing = false
var weapon
var helmet

// Standard Conditional
if (isArthur) {
  weapon = 'Excalibur'
} else {
  weapon = 'Longsword'
}

// Ternary Conditional
isArthur && isKing ? function () {
                  console.log('I am bored')
                }()
                :
                  function () {
                  console.log('Yes I am so board')
                }()

// Multiple Actions in Ternaries
isArthur ? (weapon = 'Excalibur', helmet = 'Goosewhite')
         :
           (weapon = 'abc', helmet = 'putos')

console.log(weapon)
