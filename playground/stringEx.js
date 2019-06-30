// 1. Write a JavaScript function to check whether an `input` is a string or not.
// Test Data :
console.log(is_string('w3resource'));
// true
console.log(is_string([1, 2, 4, 0]));
// false
function is_string(ele) {
  return ele.constructor === String;
}

// 2. Write a JavaScript function to check whether a string is blank or not.
// Test Data :
console.log(is_Blank(''));
console.log(is_Blank('abc'));
// true
// false
function is_Blank(str) {
  return str.length === 0;
}

// 3. Write a JavaScript function to split a string and convert it into an array of words.
// Test Data :
console.log(string_to_array('Robin Singh'));
// ["Robin", "Singh"]
function string_to_array(str) {
  return str.constructor === String
    ? str.split(' ')
    : 'Sorry, we need a string here.:)';
}

// 4. Write a JavaScript function to extract a specified number of characters from a string.
// Test Data :
console.log(truncate_string('Robin Singh', 4));
// "Robi"
function truncate_string(str, n) {
  return str.trim().substr(0, n);
}
