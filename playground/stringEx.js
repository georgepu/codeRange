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
	return str
		.split(' ')
		.map(capitalize)
		.join(' ');
}

// 10. Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case.
// Test Data :
console.log(swapcase('AaBbc'));
// "aAbBC"
/* function swapcase(str) {
	let result = '',
		e;
	for (e of str) {
		result += e.match(/[a-z]/) ? e.toUpperCase() : e.toLowerCase();
	}
	return result;
} */
function swapcase(str) {
	return str.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
		return chr ? match.toUpperCase() : match.toLowerCase();
	});
}

// 11. Write a JavaScript function to convert a string into camel case.
// Test Data:
console.log(camelize('JavaScript Exercises heydude Howru'));
console.log(camelize('JavaScript exercises iloveu'));
console.log(camelize('JavaScriptExercises'));
// "JavaScriptExercises"
// "JavaScriptExercises"
// "JavaScriptExercises"
function camelize(str) {
	const regPat = /(\s[a-z]+)|(\s[A-Z]+)|(^\s)/g;
	const morph = (match, p1, p2, p3) => {
		if (p1) return capitalize_Words(match.trim());
		if (p2) return match.trim();
		if (p3) return;
	};
	return str.trim().replace(regPat, morph);
}
