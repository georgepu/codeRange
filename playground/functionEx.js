// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output: 34223
function revNum(n) {
	return Number(
		String(n)
			.split('')
			.reverse()
			.join('')
	);
}
console.log(revNum(32243));

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not ?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
function isPalindrome(str) {
	const deSpace = str
		.toLowerCase()
		.split('')
		.filter(a => a !== ' ');
	return deSpace.join('') === deSpace.reverse().join('');
}
console.log(isPalindrome('madam'));
console.log(isPalindrome('nurses Run'));

// Bonus:
console.log(isAnagram('anagram', 'gramana')); // Should return true
console.log(isAnagram('anagram', 'margnna')); // Should return false
function isAnagram(str1, str2) {
	return str1.length === str2.length
		? str1
			.split('')
			.sort()
			.join('') ===
				str2
					.split('')
					.sort()
					.join('')
		: false;
}

// Bonus:
// Given an unordered array of integers and a value sum, return true if any two items may be added such that they equal the value of sum.Otherwise, return false.
// So, if we were given the array[3, 5, 1, 4] and the value 9, our function should return true, because 4 + 5 = 9.
(function hasPair(arr, n) {
	let pairArr = arr.map(a => n - a);
	let set = new Set(arr.concat(pairArr));
	console.log(set.size !== arr.concat(pairArr).length);
})([3, 5, 1, 4], 8);

// 3. Write a JavaScript function that generates all combinations of a string.
// Example string: 'dog'
// Expected Output: d,do, dog, o, og, g
{
	let result = [];
	function combo(str) {
		for (let i = 0; i < str.length; i++) {
			result.push(str.substring(0, i + 1));
		}
		str.length < 2 || combo(str.substring(1));
		return result;
	}
	console.log(combo('elephant').toString());
}

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string: 'webmaster'
// Expected Output: 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.
(function sortOrder(str) {
	console.log(
		str
			.split('')
			.sort()
			.join('')
	);
})('webmaster');

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// Example string: 'the quick brown fox'
// Expected Output: 'The Quick Brown Fox '
(function cap1st(str) {
	console.log(
		str
			.split(' ')
			// .map(a => a.replace(/^\w/, e => e.toUpperCase()))
			.map(a => a.charAt(0).toUpperCase() + a.substring(1))
			.join(' ')
	);
})('the quick brown fox');

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// Example string: 'Web Development Tutorial'
// Expected Output: 'Development'
(function longestWord(str) {
	console.log(str.split(' ').reduce((l, a) => (a.length <= l.length ? l : a)));
})('Web Development Tutorialhahaha');

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Example string: 'The quick brown fox'
// Expected Output: 5
(function findVowel(str) {
	const regPat = /[aeiou]/gi;
	console.log(str.match(regPat).length);
})('The quIck brown fox');

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
// Note: A prime number(or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
function findPrime(n) {
	for (let i = 2; i < n; i++) {
		if (n % i === 0) {
			return 'It\'s not a prime.';
		}
	}
	return 'It\'s a prime.';
}
console.log(findPrime(17911));

// 9. Write a JavaScript function which accepts an argument and returns the type.
// Note: There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
function getType(arg) {
	return typeof arg;
}
let hello;
console.log(getType(88));
console.log(getType('88'));
console.log(getType({ a: 88 }));
console.log(getType(() => {}));
console.log(getType(88 * '88'));
console.log(getType(hello));
console.log(getType(88 === 88));

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
(function matrix(n) {
	for (let i = 0; i < n; i++) {
		let p = '';
		for (let j = 0; j < n; j++) {
			p = `${p} ${String(i === j ? 1 : 0)}`;
		}
		console.log(p);
	}
})(8);

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
// Sample array: [1, 2, 3, 4, 5]
// Expected Output: 2, 4
function findNums(arr) {
	let newArr = arr.sort((a, b) => a - b);
	return Array(newArr[1], newArr[newArr.length - 2]).toString();
}
console.log(findNums([1, 2, 3, 4, 5]));

// 12. Write a JavaScript function which says whether a number is perfect.
// According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself(also known as its aliquot sum).Equivalently, a perfect number is a number that is half the sum of all of its positive divisors(including itself).
// Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: (1 + 2 + 3 + 6) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
function isPerfectNum(n) {
	let t = 1;
	for (let i = 2; i < n; i++) {
		t += n % i === 0 && i;
	}
	return t === n ? true : false;
}
console.log(isPerfectNum(28));

// 13. Write a JavaScript function to compute the factors of a positive integer.
function factors(n) {
	let result = [];
	for (let i = 1; i <= n; i++) {
		if (n % i === 0) result.push(i);
	}
	return result;
}
console.log(factors(98));

// 14. Write a JavaScript function to convert an amount to coins.
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount.and 25, 10, 5, 2, 1 are coins.
// 	Output : 25, 10, 10, 1
{
	let result = [];
	function amount2coins(amount, coins) {
		result.push(~~(amount / coins[0]));
		amount %= coins[0];
		coins.shift(coins[0]);
		if (amount > 0) amount2coins(amount, coins);
		return result;
	}
}
console.log(amount2coins(46, [25, 10, 5, 2, 1]));

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases.Accept b and n from the user and display the result.
function power(b, n) {
	return Math.pow(b, n);
}
console.log(power(9, 13));

// 16. Write a JavaScript function to extract unique characters from a string.
// Example string: "thequickbrownfoxjumpsoverthelazydog"
// Expected Output: "thequickbrownfxjmpsvlazydg"
{
	let result = [];
	function extractChar(str) {
		result.push(str[0]);
		let newStr = str.replace(new RegExp(str[0], 'gi'), '');
		!result.join('').match(new RegExp(newStr[0])) && extractChar(newStr);
		return result.join('');
	}
}
console.log(extractChar('thequickbrownfoxjumpsoverthelazydogddddddddddd'));

// 17. Write a JavaScript function to  get the number of occurrences of each letter in specified string.
function occurred(str) {
	let result = {},
		c;
	for (c of str) {
		result[c] = str.match(new RegExp(c, 'g')).length;
	}
	return result;
}
console.log(occurred('Once Upon a Time In Hollywood'));
