// 1. Write a JavaScript program to list the properties of a JavaScript object.
// Sample object:
var student = {
	name: 'David Rayy',
	sclass: 'VI',
	rollno: 12
};
// Sample Output: name, sclass, rollno
function keys(obj) {
	return obj.constructor === Object
		? Object.keys(obj).toString()
		: 'Not an object.';
}
console.log(keys(student));
console.log(keys('student'));

// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
let util = require('util');
function del_objKey(obj, prop) {
	let cp = {};
	Object.assign(cp, obj);
	delete obj[prop];
	return `
		Original: ${util.inspect(cp)},
        After: ${util.inspect(obj)}
        `;
}
console.log(del_objKey(student, 'rollno'));

// 3. Write a JavaScript program to get the length of an JavaScript object.
// Sample object :
var student1 = {
	name: 'David Rayy',
	sclass: 'VI',
	rollno: 12
};
console.log(
	(function obj_length(obj) {
		return Object.keys(obj).length;
	})(student1)
);

// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.

var library = [
	{
		author: 'Bill Gates',
		title: 'The Road Ahead',
		readingStatus: true
	},
	{
		author: 'Steve Jobs',
		title: 'Walter Isaacson',
		readingStatus: true
	},
	{
		author: 'Suzanne Collins',
		title: 'Mockingjay: The Final Book of The Hunger Games',
		readingStatus: false
	}
];

console.table(library);

// 5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
// Volume of a cylinder : V = πr2h
// where r is the radius and h is the height of the cylinder.
class It {
	constructor(r, h) {
		this.r = r;
		this.h = h;
	}
	volume() {
		return (this.r * this.h * 2 * Math.PI).toFixed(4);
	}
}
console.log(`The volume of this cylinder is ${new It(10, 20).volume()}.`);

// 6. Write a Bubble Sort algorithm in JavaScript.
// Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
// Sample Data: [6,4,0, 3,-2,1]
// Expected Output : [-2, 0, 1, 3, 4, 6]
function bubbleSort(arr) {
	return arr.sort((a, b) => a - b);
}
console.log(bubbleSort([6, 14, 0, 3, -2, 1]));

// 7. Write a JavaScript program which returns a subset of a string.
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]
{
	let result = [];
	function showSubset(str) {
		for (let i = 0; i < str.length; i++) {
			result.push(str.substr(0, i + 1));
		}
		return str.length < 2 ? result : showSubset(str.substring(1));
	}
	console.log(showSubset('dog'));
}

// 8. Write a JavaScript program to create a Clock.
// Note: The output will come every second.
// Expected Console Output :
// "14:37:42"
// "14:37:43"
// "14:37:44"
// "14:37:45"
// "14:37:46"
// "14:37:47"
function myClock(h = 0, m = 0, s = 0) {
	setInterval(() => {
		s < 59
			? s++
			: ((s = 0), m < 59 ? m++ : ((m = 0), h < 23 ? h++ : (h = 0)));
		console.log(`${h}:${m}:${s}`);
	}, 1000);
}
myClock(23, 58, 42);
