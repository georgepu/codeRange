const tax = 0.13
const threshold = 499.99
const accessory = 49.99

var amount = 0, phone = 0
var bank = parseInt(prompt('Enter your bank account balance:'), 10)

for (var i = 0, j = 0; amount <= bank; i++) {
  alert('You have $' + (bank - amount).toFixed(2) + ' left in bank.')
  phone = parseInt(prompt('Enter the phone price:'), 10)
  if ((threshold - phone) >= accessory) {
    amount += buy(phone, accessory)
    j++
  } else if (phone <= threshold) {
    amount += buy(phone, 0)
    alert('You can buy the phone but no accessory.')
  } else { alert('Sorry, this phone price exceeds the spending threshold of $' + threshold + '.') }
  if (buy(phone, accessory) > (bank - amount)) {
    if (buy(phone, 0) > (bank - amount)) { break }
  }
}
show(amount)

function buy (fone, acc) {
  return (fone + acc) * (1 + tax)
}

function show (total) {
  alert('You have bought ' + i + ' phones and ' + j + ' accessories, and the total amount is $' + total.toFixed(2))
}
