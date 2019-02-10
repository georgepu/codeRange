/*
So, what makes THIS so powerful in this context, you’re asking?

It allows us to scale applications and make repeatable code.

Think about your social media accounts.

Each account could be an object based off a prototype called ‘Friend’. Each time a new account is created, it inherits the methods and properties from its prototype, while passing in unique information like name, password, interests, job, etc.
*/

// Constructor Function
var Friend = function (name, password, interests, job) {
  this.fullName = name
  this.password = password
  this.interests = interests
  this.job = job
}

function sayHello () {
  // uncomment the console.log to see the object that 'this' points to
  //  console.log(this);
  return `Hi, my name is ${this.fullName} and I'm a ${this.job}. Let's be friends!`
}

// Create one or multiple instances of the Friend prototype with the keyword 'new'
var john = new Friend('John Smith', 'badpassword', ['hiking', 'biking', 'skiing'], 'teacher')

console.log(john)

// Assign the function to the greeting key on the john object
john.greeting = sayHello

// Call the the new method
console.log(john.greeting())

// Remember, you can't call sayHello() as a function; it will return "Hi, my name is undefined and I'm a undefined. Let's be friends!"
// Because the function's context is global and the window object does NOT have the keys that belong to the Friend prototype
console.log(sayHello())
