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

// 5. Write a JavaScript function to convert a string in abbreviated form.
// Test Data :
console.log(abbrev_name('Robin Singh'));
// "Robin S."
function abbrev_name(str) {
	const split = str.split(' ');
	const letter = split[split.length - 1].slice(0, 1);
	return `${split[0]} ${letter}.`;
}

// 6. Write a JavaScript function to hide email addresses to protect from unauthorized user.
// Test Data :
console.log(protect_email('robin_singh@example.com'));
// "robin...@example.com"
function protect_email(str) {
	const split = str.split('@');
	const usr = `${split[0].split('_')[0]}...`;
	return Array(usr)
		.concat(split[1])
		.join('@');
}

// 7. Write a JavaScript function to parameterize a string.
// Test Data :
console.log(string_parameterize('Robin Singh from USA.'));
// "robin-singh-from-usa"
function string_parameterize(str) {
	return str
		.toLowerCase()
		.replace(/.$/, '')
		.split(' ')
		.join('-');
}

// 8. Write a JavaScript function to capitalize the first letter of a string.
// Test Data :
console.log(capitalize('js string exercises'));
// "Js string exercises"
function capitalize(str) {
	return str.match(/^[a-z]/g)
		? str.replace(str.charAt(0), str.charAt(0).toUpperCase())
		: str;
}

// 9. Write a JavaScript function to capitalize the first letter of each word in a string.
// Test Data :
console.log(capitalize_Words('js string exercises'));
// "Js String Exercises"
function capitalize_Words(str) {
	return str.split(' ').map(capitalize);
}
