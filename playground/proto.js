function Car (model, speed, tire) {
  this.model = model
  this.speed = speed
  this.tire = tire
  Car.prototype.moving = function hello () {
    console.log('hi')
  }
}

let car1 = new Car('toyota', 100, 'michilin')
console.log(car1)
let car2 = new Car('Nissan', 200, 'bridgestone')
console.log(car2)
console.log(car1.moving === car2.moving)

let car3 = Object.create(car1)
console.log(car3)
car3.moving()
console.log(car1.__proto__ === car3.__proto__)
console.log(car1.__proto__)
console.log(car3.__proto__);

(function isPalindrome (inputStr) {
  let i = 0
  if (inputStr.charAt(i) === inputStr.charAt(inputStr.length - 1)) {
    if (inputStr.length > 2) {
      isPalindrome(inputStr.substring(i + 1, inputStr.length - 1))
    } else {
      console.log(true)
    }
  } else {
    console.log(false)
  }
})('aaaabaaccdccaabaaaa');

(function isPalindrome2 (inputStr) {
  if (inputStr === inputStr.split('').reverse().join('')) {
    console.log(true)
  } else {
    console.log(false)
  }
})('aaaabaaccdccaabaaaa')

var x = [{ name: 'Jhon',
  hobbies: ['cricket', 'Chess', 'Camping' ] },
{ name: 'Sam',
  hobbies: ['PinPong', 'hockey'] }]
// write a function/method: to return string of all hobbies in the above variable x separated by " # " .
// sample output:   "cricket # Chess # Camping # PinPong # hockey"
let newList = []
for (let i of x) {
  newList = newList.concat(i.hobbies)
}
let showIt = newList.join(' # ')
console.log(`get this:	${showIt}`);

// write a functin with a string as input and return the count of appearance of each char, no repeated counts
(function countChar (inputStr) {
  let newStr = inputStr.split('')
  let count = newStr.filter((value) => {
    return value === newStr[0]
  })
  let countRemain = newStr.filter((value) => {
    return value !== newStr[0]
  })
  console.log(`'${count[0]}' repeats ${count.length} times`)
  if (countRemain.length >= 1) {
    countChar(countRemain.join(''))
  }
})('wenchengtong');

// write a function that has an email address as input and return firstname and lastname that are contained in
(function emailName (email) {
  let seperate = email.split('@')[0].split('.')
  console.log(`Firstname is: ${seperate[0]};`)
  console.log(`Lastname is: ${seperate[1]};`)
})('wencheng.tong@intel.com');

// write a function that returns the longest word in the sentence
(function showLongestWord (inputStr) {
  let result
  let seperate = inputStr.split(' ')
  console.log(seperate)
  for (let word of seperate) {
    result = seperate.filter((individual) => {
      return word.length < individual.length
    })
    if (result.length === 0) {
      console.log(`The longest word is: ${word}`)
    }
  }
})('The quick brown fox jumped over the lazy dogs');

(function showLongestWord2 (inputStr) {
  let longestWord = inputStr.split(' ').reduce((longest, word) => {
    return longest.length > word.length ? longest : word
  }, '')
  console.log(`The result is: ${longestWord}`)
})('The quick brown fox jumped over the jumped lazy dogs')

let a = {
  field: 'field',
  getField: function () {
    return function () {
      return this.field
    }
  }
}

let callback = a.getField().apply(a)
console.log(callback)

// practice promise
let blockCode = () => {
  console.log('Hello buddy!')
}

let promise = new Promise((resolve) => {
  setTimeout(() => {
    blockCode()
    resolve()
  }, 5000)
})

Promise.all([promise]).then(() => {
  console.log(`Now he's got it!`)
})

// 'abc'.repeatify(3) returns 'abcabcabc'
String.prototype.repeatify = function (num) {
  return new Array(num + 1).join(this)
}
let newStr = 'abc'.repeatify(3)
console.log(newStr)
