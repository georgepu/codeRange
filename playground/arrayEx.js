console.log(
	(input => {
		if (Object.prototype.toString.call(input).includes("Array")) {
			return true;
		}
		return false;
	})([2, 3])
);

console.log(
	(input => {
		return input.slice(0);
	})([3, 4])
);

const last = (inputAr, num) => {
	if (inputAr.length && num > 0) {
		return inputAr.slice(inputAr.length - num);
	} else if (!inputAr.length) {
		return void 0;
	} else if (!num) {
		return inputAr.slice(-1).toString();
	}
	return inputAr;
};
console.log(last([2, 3, 4, 5, 6]));

const inputAr = (inputAr, a) => {
	return a === undefined ? inputAr.join(",") : inputAr.join(a);
};
console.log(inputAr(["Red", "Green", "White", "Black"], "+"));

let test1 = [1];
let test2 = { a: 1 };
if (test1 && test1.length) {
	console.log(true);
} else console.log(false);

if (Object.keys(test2).length) {
	console.log(true);
} else console.log(false);

//insert dash between even nums
const insertDash = input => {
	if (typeof input === "number") {
		let str = input.toString().split("");
		for (let i = 0; i < str.length; i++) {
			if (str[i] % 2 === 0 && str[i + 1] % 2 === 0) {
				str[i] = `${str[i]}-`;
			}
		}
		return str.join("");
	}
};
console.log(insertDash(88888888888888));

//sort array
const arr1 = [-3, 8, 100, 6, 5, -4, 3, 2, 1];
const sortAry = inputAry => {
	return inputAry.sort((a, b) => {
		return b - a;
	});
};
console.log(sortAry(arr1));

const sortAry2 = inputAry => {
	return inputAry.reduce((smst, e) => {
		return smst < e ? smst : e;
		// return Math.min(smst, e);
	});
};
console.log(sortAry2(arr1));

const filterAry = inputAry => {
	return inputAry.filter(current => {
		return current !== sortAry2(arr1);
	});
};
console.log(filterAry(arr1));

String.prototype.repeatIt = function(times) {
	return new Array(times + 1).join(this);
};
console.log("heygeorge".repeatIt(3));

//find most occurrance
let arr2 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
let newAry = [];
let firstRun = inputAry => {
	return inputAry.filter(current => {
		return current === inputAry[0];
	});
};
let firstRunRemain = inputAry => {
	return inputAry.filter(current => {
		return current !== inputAry[0];
	});
};
let spreadRepeatedEle = inputAry => {
	newAry.push(firstRun(inputAry));
	if (firstRunRemain(inputAry).length > 0) {
		spreadRepeatedEle(firstRunRemain(inputAry));
	}
};
spreadRepeatedEle(arr2);
let find = ar => {
	return ar.reduce((a, b) => {
		let c = b.length;
		let d = a.length;
		return d > c ? a : b;
	});
};

console.log(`${find(newAry)[0]}  (${find(newAry).length} times)`);

//find most occurrance second approach
let top = 1;
let m = 0;
let item;

for (e of arr2) {
	for (a of arr2) {
		if (a === e) {
			m++;
		}
	}
	if (m > top) {
		top = m;
		item = e;
	}
	m = 0;
}
console.log(`${item}  (${top} times)`);

// Write a JavaScript program which accept a string as input and swap the case of each character.
// For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
const swap = inputStr => {
	let ref = inputStr.toUpperCase();
	let resultStr = [];
	for (let i = 0; i < inputStr.length; i++) {
		if (inputStr[i] === ref[i] && inputStr !== " ") {
			resultStr.push(inputStr[i].toLowerCase());
		} else if (inputStr[i] !== ref[i] && inputStr !== " ") {
			resultStr.push(inputStr[i].toUpperCase());
		} else if (inputStr === " ") {
			resultStr.push(inputStr[i]);
		}
	}
	return resultStr.join("");
};
console.log(swap("tHE qUICK bROWN fOX"));

/*Write a JavaScript program which prints the elements of the following array.
Note : Use nested for loops.
Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
Sample Output : 
"row 0" 
" 1" 
" 2" 
" 1"
" 24"
"row 1" 
------
------*/
const ah = [
	[1, 2, 1, 24],
	[8, 11, 9, 4],
	[7, 0, 7, 27],
	[7, 4, 28, 14],
	[3, 10, 26, 7]
];
const solution = input => {
	for (let i = 0; i < input.length; i++) {
		input[i].unshift(`row ${i}`);
		for (e of input[i]) {
			console.log(e);
		}
	}
};
solution(ah);

//Write a JavaScript program to find the sum of squares of a numeric vector.
const func = inputArr => {
	let sum = 0;
	for (e of inputArr) {
		sum += e * e;
	}
	return sum;
};
console.log(func([0, 1, 2, 3, 4]));

//Write a JavaScript program to compute the sum and product of an array of integers.
const func2 = inputArr => {
	let result = { sum: 0, product: 0 };
	for (e of inputArr) {
		result.sum += e;
		result.product *= e;
	}
	return result;
};
console.log(func2([0, 1, 2, 3, 4]));

//Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).
let result = [];
const removeDup = inputArr => {
	for (a of inputArr) {
		let temp = inputArr.filter(e => {
			return a.toString().toUpperCase() === e.toString().toUpperCase();
		});
		if (temp.length > 0) {
			result.push(temp[0]);
		}
		inputArr = inputArr.filter(e => {
			return a.toString().toUpperCase() !== e.toString().toUpperCase();
		});
	}
	return result;
};
console.log(removeDup([1, 2, 2, "hi", 5, 4, 7, 8, "hI", 7, 3, 6]));

const removeDup2 = inputArr => {
	let res = inputArr.filter((e, i) => {
		return inputArr.indexOf(e) >= i;
	});
	return res;
};
console.log(removeDup2([1, 2, 2, "hi", 5, 4, 7, 5, 8, "hi", 7, 3, 6]));

(removeDup3 = inputArr => {
	let a = {};
	let res = [];
	for (e of inputArr) {
		a[e] = 0;
	}
	for (e in a) {
		res.push(e);
	}
	console.log(res);
})([1, 2, 2, "hi", 5, 4, 7, 5, 8, "hi", 7, 3, 6]);

// We have the following arrays :
const color = [
	"Blue ",
	"Green",
	"Red",
	"Orange",
	"Violet",
	"Indigo",
	"Yellow ",
	"Blue ",
	"Green",
	"Red",
	"Orange",
	"Violet",
	"Indigo",
	"Yellow "
];
const o = ["th", "st", "nd", "rd"];
// Write a JavaScript program to display the colors in the following way :
// "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."
// - - - - - - - - - - - - -
// Note : Use ordinal numbers to tell their position.
const clrDsp = inputArr => {
	for (e of inputArr.entries()) {
		if (e[0].toString().endsWith("0")) {
			console.log(`${e[0] + 1}${o[1]} choice is ${e[1]} .`);
		} else if (e[0].toString().endsWith("1")) {
			console.log(`${e[0] + 1}${o[2]} choice is ${e[1]} .`);
		} else if (e[0].toString().endsWith("2")) {
			console.log(`${e[0] + 1}${o[3]} choice is ${e[1]} .`);
		} else {
			console.log(
				`${parseInt(e[0].toString()) + 1}${o[0]} choice is ${e[1]} .`
			);
		}
	}
};
clrDsp(color);

//above using switch statement
const clrDsp2 = inputArr => {
	for (e of inputArr.entries()) {
		switch (true /*.substr(-2)*/) {
			case /(10$|11$|12$)/.test(e[0]):
				console.log(`${e[0] + 1}${o[0]} choice is ${e[1]} .`);
				break;
			case /0$/.test(e[0]):
				console.log(`${e[0] + 1}${o[1]} choice is ${e[1]} .`);
				break;
			case /1$/.test(e[0]):
				console.log(`${e[0] + 1}${o[2]} choice is ${e[1]} .`);
				break;
			// case '11':
			// 	console.log(`${parseInt(e[0].toString())+1}${o[0]} choice is ${e[1]} .`);
			// 	break;
			case /2$/.test(e[0]):
				console.log(`${e[0] + 1}${o[3]} choice is ${e[1]} .`);
				break;
			// case '12':
			// 	console.log(`${parseInt(e[0].toString())+1}${o[0]} choice is ${e[1]} .`);
			// 	break;
			default:
				console.log(`${e[0] + 1}${o[0]} choice is ${e[1]} .`);
		}
	}
};
clrDsp2(
	color
		.concat(color)
		.concat(color)
		.concat(color)
		.concat(color)
		.concat(color)
		.concat(color)
		.concat(color)
		.concat(color)
);

//Find the leap years in a given range of years.
const data = [1930, 2020, 1929, 1200, 1998, 1997, 1600];
let leapResult = [];
function isLeap(yrAr) {
	for (yr of yrAr) {
		let temp =
			(yr % 4 === 0 && yr % 100 === 0 && yr % 400 === 0) ||
			(yr % 4 === 0 && yr % 100 !== 0)
				? `${yr} is a leap year.`
				: null;
		if (temp !== null) {
			leapResult.push(temp);
		}
	}
}
isLeap(data);
for (res of leapResult) {
	console.log(res);
}

//Write a JavaScript program to shuffle an array.
const oriArr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25];
let shuffledArr = [];
function shuffle(inputArr) {
	let count = inputArr.length;
	if (count > 0) {
		const re = Math.floor(Math.random() * count);
		shuffledArr.push(inputArr[re]);
		// count--;
		shuffle(
			inputArr.filter(e => {
				return e !== inputArr[re];
			})
		);
	}
}
shuffle(oriArr);
console.log(shuffledArr);

// Write a JavaScript program to perform a binary search.
// Note : A binary search or half-interval search algorithm finds the position of a specified input value within an array sorted by key value.
// Sample array :
const sortedArr = [1, 2, 3, 4, 5, 7, 8, 9, 12, 18];
// Expected Output :
// console.log(binary_Search(items, 1)); //0
// console.log(binary_Search(items, 5)); //4
function binary_Search(items, e) {
	if (items.includes(e)) {
		let middleIndex = Math.floor(items.length / 2);
		if (items[middleIndex] === e) {
			return middleIndex;
		} else if (items[middleIndex] < e) {
			return (
				binary_Search(items.slice(middleIndex + 1), e) + middleIndex + 1
			);
		} else if (items[middleIndex] > e) {
			return binary_Search(items.slice(0, middleIndex), e);
		}
	} else {
		return "not there!";
	}
}
console.log(binary_Search(sortedArr, 9));
console.log(binary_Search(sortedArr, 5));

// There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays.
// Sample array :
array1 = [1, 0, 2, 3, 4];
array2 = [3, 5, 6, 7, 8, 13];
// Expected Output :
// [4, 5, 8, 10, 12, 13]
function arrSum(arr1, arr2) {}
