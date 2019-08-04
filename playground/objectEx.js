// 1. Write a JavaScript program to list the properties of a JavaScript object.
// Sample object:
var student = {
	name: 'David Rayy',
	sclass: 'VI',
	rollno: 12,
	george: () => {},
	lan: function() {}
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
	let id = setInterval(() => {
		s < 59
			? s++
			: ((s = 0), m < 59 ? m++ : ((m = 0), h < 23 ? h++ : (h = 0)));
		console.log(`${h}:${m}:${s}`);
		if (m === 59) clearInterval(id);
	}, 1000);
}
myClock(23, 58, 42);

// 9. Write a JavaScript program to calculate the area and perimeter of a circle.
// Note : Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user.
function circle(r) {
	return {
		perimeter: 2 * Math.PI * r,
		area: Math.pow(r, 2) * Math.PI
	};
}
let { area, perimeter } = circle(100);
console.log(`Area of circle is ${area} and perimeter ${perimeter}.`);

// 10. Write a JavaScript program to sort an array of JavaScript objects.
// Sample Object :

var library = [
	{
		title: 'The Road Ahead',
		author: 'Bill Gates',
		libraryID: 1254
	},
	{
		title: 'Walter Isaacson',
		author: 'Steve Jobs',
		libraryID: 4264
	},
	{
		title: 'Mockingjay: The Final Book of The Hunger Games',
		author: 'Suzanne Collins',
		libraryID: 3245
	}
];
// Expected Output:

// [[object Object] {
//   author: "Walter Isaacson",
//   libraryID: 4264,
//   title: "Steve Jobs"
// }, [object Object] {
//   author: "Suzanne Collins",
//   libraryID: 3245,
//   title: "Mockingjay: The Final Book of The Hunger Games"
// }, [object Object] {
//   author: "The Road Ahead",
//   libraryID: 1254,
//   title: "Bill Gates"
// }]
(function sortArr(arr) {
	let sortObj = obj => {
		let newObj = {};
		Object.keys(obj)
			.sort()
			.forEach(o => {
				newObj[o] = obj[o];
			});
		return newObj;
	};
	let newArr = arr.map(sortObj);
	console.log(
		newArr.sort((a, b) => {
			if (a.title > b.title) return -1;
			if (a.title < b.title) return 1;
			return 0;
		})
	);
})(library);

// 11. Write a JavaScript function to print all the methods in an JavaScript object.
// Test Data:
// console.log(all_properties(Array));
// ["length", "name", "arguments", "caller", "prototype", "isArray", "observe", "unobserve"]
class Obj_fac {
	constructor() {
		this.george = 1;
		this.lan = 2;
		this.daisy = () => {};
		this.kenneth = function() {};
	}
	choco() {} //with class syntax, class methods won't show because they're not enumerable in prototype.
}
(function all_methods(obj) {
	let result = [];
	if (obj.constructor === Object || Function) {
		for (let o in obj) {
			obj[o].constructor === Function ? result.push(o) : 0;
		}
	}
	console.log(
		obj,
		result,
		Object.getOwnPropertyNames(Object.getPrototypeOf(obj)) //getOwnPropertyNames will display non-enumerable
	);
})(Obj_fac);

// 12. Write a JavaScript function to parse an URL.
(function parse_URL(url) {
	const regPat = /http[s]?:\/\//;
	const newStr1 = url.replace(regPat, '');
	const newStr2 = newStr1.substring(0, newStr1.search('/'));
	console.log(`Company's domain is ${newStr2.match(/[^.]+\.\w+$/).join()}`);
})('https://dep.www.gt.citigroup.com/index.html');

// 13. Write a JavaScript function to retrieve all the names of object's own and inherited properties.
function all_props(obj) {
	if (typeof obj === 'object') {
		return Object.getOwnPropertyNames(obj);
	}
}
console.log(all_props(student));

// 14. Write a JavaScript function to retrieve all the values of an object's properties.
function all_values(obj) {
	if (typeof obj === 'object') {
		return Object.values(obj);
	}
}
console.log(all_values(new Obj_fac()));
