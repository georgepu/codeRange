var x = 2
var fns = []

;(function () {
  var x = 5

  for (let i = 0; i < x; i++) {
    // ..
    fns.push(() => i)
  }
})()

console.log(x * 2 === fns[x * 2]())
// true
