(function isEven (a) {
  if (Math.abs(a) === 0) {
    return true
  }
  if (Math.abs(a) === 1) {
    return false
  }
  if (Math.abs(a) > 1) {
    return isEven(Math.abs(a) - 2)
  }
})(-1)
