(function (h) {
  let i = ''
  for (let j = 0; j < h; j++) {
    for (let k = 0; k < h; k++) {
      if ((j + k) % 2 === 0) {
        i += ' '
      } else {
        i += '#'
      }
    }
    i += '\n'
  }
  console.log(i)
})(8)
