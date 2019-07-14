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

// 12. Write a JavaScript function to uncamelize a string.
// Test Data:
console.log(uncamelize('helloWorld'));
console.log(uncamelize('helloWorldMotherf*cker', '-'));
console.log(uncamelize('helloWorld', '_'));
// "hello world"
// "hello-world"
// "hello_world"
function uncamelize(str, c) {
	const regPat = /([A-Z][a-z]+)/g;
	const morph = match => {
		return c ? `${c}${match.toLowerCase()}` : ` ${match.toLowerCase()}`;
	};
	return str.trim().replace(regPat, morph);
}

// 13. Write a JavaScript function to concatenates a given string n times(default is 1).
// Test Data:
console.log(repeat('Ha!'));
console.log(repeat('Ha!', 2));
console.log(repeat('Ha!', 3));
// "Ha!"
// "Ha!Ha!"
// "Ha!Ha!Ha!"
function repeat(str, c) {
	let result = '';
	for (let i = 0; c ? i < c : i < 1; i++) {
		result += str;
	}
	return result;
}

// 14. Write a JavaScript function to insert a string within a string at a particular position(default is 1).
// Test Data:
console.log(insert('We are doing some exercises.'));
console.log(insert('We are doing some exercises.', 'JavaScript '));
console.log(insert('We are doing some exercises.', 'JavaScript ', 18));
// "We are doing some exercises."
// "JavaScript We are doing some exercises."
// "We are doing some JavaScript exercises."
function insert(ori_str, add_str, i) {
	if (add_str) {
		if (i) {
			return ori_str.slice(0, i) + add_str + ori_str.slice(i);
		} else {
			return add_str + ori_str;
		}
	} else {
		return ori_str;
	}
}

// 15. Write a JavaScript function to humanized number(Formats a number to a human - readable string.) with the correct suffix such as 1st, 2nd, 3rd or 4th.
// Test Data:
console.log(humanize_format());
console.log(humanize_format(1));
console.log(humanize_format(8));
console.log(humanize_format(301));
console.log(humanize_format(402));
// "1st"
// "8th"
// "301st"
// "402nd"
function humanize_format(n) {
	const regPat = /([^1][1-3]$)|(^[1-3]$)/;
	let result = '';
	if (regPat.test(n)) {
		switch (String(n).charAt(String(n).length - 1)) {
		case '1':
			result = n + 'st';
			break;
		case '2':
			result = n + 'nd';
			break;
		case '3':
			result = n + 'rd';
			break;
		default:
			break;
		}
	} else if (n) {
		result = n + 'th';
	}
	return result;
}

// 16. Write a JavaScript function to truncates a string if it is longer than the specified number of characters.Truncated strings will end with a translatable ellipsis sequence("…")(by default ) or specified characters.
// Test Data:
console.log(text_truncate('We are doing JS string exercises.'));
console.log(text_truncate('We are doing JS string exercises.', 19));
console.log(text_truncate('We are doing JS string exercises.', 15, '!!'));
// "We are doing JS string exercises."
// "We are doing JS ..."
// "We are doing !!"
function text_truncate(str, ...more) {
	switch (more.length) {
	case 0:
		return str;
	case 1:
		return str.slice(0, more[0]) + ' ...';
	case 2:
		return str.slice(0, more[0]) + ` ${more[1]}`;
	default:
		break;
	}
}

// 17. Write a JavaScript function to chop a string into chunks of a given length.
// Test Data:
console.log(string_chop('w3resource'));
console.log(string_chop('w3resource', 2));
console.log(string_chop('w3resource', 4));
// ["w3resource"]
// ["w3", "re", "so", "ur", "ce"]
// ["w3r", "eso", "urc", "e"]
function string_chop(str, n) {
	let result = n ? [] : Array(str);
	for (let i = 0; i < str.length && n; i += n) {
		result.push(str.slice(i, i + n));
	}
	return result;
}

// 18. Write a JavaScript function to count the occurrence of a substring in a string.
// Test Data:
console.log(count('The quick brown fox jumps over the lazy dog', 'the'));
// Output:
// 2
console.log(count('The quick brown fox jumps over the lazy dog', 'fox', false));
// Output:
// 1
function count(str, ...s) {
	return str.match(new RegExp(`${s[0]}`, 'gi')).length;
}

// 19. Write a JavaScript function to escape a HTML string.
// Test Data:
console.log(
	escape_HTML('<a href="javascript-string-exercise-17.php" target="_blank">')
);
// Output:
// "&lt;a href=&quot;javascript-string-exercise-17.php&quot; target=&quot;_blank&quot;&gt;"
function escape_HTML(str) {
	const regPat = /[\W+]/g;
	return str.replace(regPat, match => {
		switch (match) {
		case '&':
			return '&amp;';
		case ' ':
			return '&nbsp;';
		case '<':
			return '&lt;';
		case '>':
			return '&gt;';
		case '"':
			return '&quot';
		case '\'':
			return '&apos;';
		default:
			return match;
		}
	});
}

// 20. Write a JavaScript function that can pad(left, right) a string to get to a determined length.
// Test Data:
console.log(formatted_string('0000', 123, 'l'));
console.log(formatted_string('00000000', 123, '-2'));
// Output:
// "0123"
// "12300000"
function formatted_string(str1, str2, d) {
	return d === 'l'
		? str1.slice(0, str1.length - String(str2).length) + String(str2)
		: String(str2) + str1.slice(String(str2).length);
}

// 21. Write a JavaScript function to repeat a string a specified times.
// Test Data:
console.log(repeat_string('a', 4));
console.log(repeat_string('a'));
// Output:
// "aaaa"
// "Error in string or count."
function repeat_string(str, n) {
	for (var s = '', i = 0; /\d+/g.test(n) ? i < n : null; i++) {
		s += str;
	}
	return s || 'Error in string or count.';
}

// 22. Write a JavaScript function to get a part of a string after a specified character.
// Test Data:
console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':', 'a'));
console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E', 'b'));
// Output:
// "w3resource"
// "xercises"
function subStrAfterChars(str1, str2, p) {
	switch (p) {
	case 'a':
		return str1.slice(0, str1.indexOf(str2));
	case 'b':
		return str1.slice(str1.indexOf(str2) + 1);
	default:
		break;
	}
}

// 23. Write a JavaScript function to strip leading and trailing spaces from a string.
// Test Data:
console.log(strip('w3resource '));
console.log(strip(' w3resource'));
console.log(strip(' w3resource '));
// Output:
// "w3resource"
// "w3resource"
// "w3resource"
function strip(str) {
	const regPat = /^\s|\s$/g;
	return Array(str.replace(regPat, ''));
}
