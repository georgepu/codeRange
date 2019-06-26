/* eslint-disable */
/* eslint-disable no-console */
/* eslint-disable max-len */
console.log(
  (input => {
    if (Object.prototype.toString.call(input).includes("Array")) {
      return true;
    }
    return false;
  })([2, 3])
);

console.log((input => input.slice(0))([3, 4]));

const last = (inputAr, num) => {
  if (inputAr.length && num > 0) {
    return inputAr.slice(inputAr.length - num);
  }
  if (!inputAr.length) {
    return void 0;
  }
  if (!num) {
    return inputAr.slice(-1).toString();
  }
  return inputAr;
};
console.log(last([2, 3, 4, 5, 6]));

const inputAr = (inputAr, a) =>
  a === undefined ? inputAr.join(",") : inputAr.join(a);
console.log(inputAr(["Red", "Green", "White", "Black"], "+"));

const test1 = [1];
const test2 = {
  a: 1
};
if (test1 && test1.length) {
  console.log(true);
} else console.log(false);

if (Object.keys(test2).length) {
  console.log(true);
} else console.log(false);

// insert dash between even nums
const insertDash = input => {
  if (typeof input === "number") {
    const str = input.toString().split("");
    for (let i = 0; i < str.length; i++) {
      if (str[i] % 2 === 0 && str[i + 1] % 2 === 0) {
        str[i] = `${str[i]}-`;
      }
    }
    return str.join("");
  }
};
console.log(insertDash(88888888888888));

// sort array
const arr1 = [-3, 8, 100, 6, 5, -4, 3, 2, 1];
const sortAry = inputAry => inputAry.sort((a, b) => b - a);
console.log(sortAry(arr1));

const sortAry2 = inputAry =>
  inputAry.reduce(
    (smst, e) => (smst < e ? smst : e)
    // return Math.min(smst, e);
  );
console.log(sortAry2(arr1));

const filterAry = inputAry =>
  inputAry.filter(current => current !== sortAry2(arr1));
console.log(filterAry(arr1));

String.prototype.repeatIt = function(times) {
  return new Array(times + 1).join(this);
};
console.log("heygeorge".repeatIt(3));

// find most occurrance
const arr2 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
const newAry = [];
const firstRun = inputAry =>
  inputAry.filter(current => current === inputAry[0]);
const firstRunRemain = inputAry =>
  inputAry.filter(current => current !== inputAry[0]);
const spreadRepeatedEle = inputAry => {
  newAry.push(firstRun(inputAry));
  if (firstRunRemain(inputAry).length > 0) {
    spreadRepeatedEle(firstRunRemain(inputAry));
  }
};
spreadRepeatedEle(arr2);
const find = ar =>
  ar.reduce((a, b) => {
    const c = b.length;
    const d = a.length;
    return d > c ? a : b;
  });

console.log(`${find(newAry)[0]}  (${find(newAry).length} times)`);

// find most occurrance second approach
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
  const ref = inputStr.toUpperCase();
  const resultStr = [];
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

/* Write a JavaScript program which prints the elements of the following array.
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

// Write a JavaScript program to find the sum of squares of a numeric vector.
const func = inputArr => {
  let sum = 0;
  for (e of inputArr) {
    sum += e * e;
  }
  return sum;
};
console.log(func([0, 1, 2, 3, 4]));

// Write a JavaScript program to compute the sum and product of an array of integers.
const func2 = inputArr => {
  const result = {
    sum: 0,
    product: 0
  };
  for (e of inputArr) {
    result.sum += e;
    result.product *= e;
  }
  return result;
};
console.log(func2([0, 1, 2, 3, 4]));

// Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).
const result = [];
const removeDup = inputArr => {
  for (a of inputArr) {
    const temp = inputArr.filter(
      e => a.toString().toUpperCase() === e.toString().toUpperCase()
    );
    if (temp.length > 0) {
      result.push(temp[0]);
    }
    inputArr = inputArr.filter(
      e => a.toString().toUpperCase() !== e.toString().toUpperCase()
    );
  }
  return result;
};
console.log(removeDup([1, 2, 2, "hi", 5, 4, 7, 8, "hI", 7, 3, 6]));

const removeDup2 = inputArr => {
  const res = inputArr.filter((e, i) => inputArr.indexOf(e) >= i);
  return res;
};
console.log(removeDup2([1, 2, 2, "hi", 5, 4, 7, 5, 8, "hi", 7, 3, 6]));
(removeDup3 = inputArr => {
  const a = {};
  const res = [];
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

// above using switch statement
const clrDsp2 = inputArr => {
  for (e of inputArr.entries()) {
    switch (true /* .substr(-2) */) {
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
      //  console.log(`${parseInt(e[0].toString())+1}${o[0]} choice is ${e[1]} .`);
      //  break;
      case /2$/.test(e[0]):
        console.log(`${e[0] + 1}${o[3]} choice is ${e[1]} .`);
        break;
      // case '12':
      //  console.log(`${parseInt(e[0].toString())+1}${o[0]} choice is ${e[1]} .`);
      //  break;
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

// Find the leap years in a given range of years.
const data = [1930, 2020, 1929, 1200, 1998, 1997, 1600];
const leapResult = [];

function isLeap(yrAr) {
  for (yr of yrAr) {
    const temp =
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

// Write a JavaScript program to shuffle an array.
const oriArr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25];
const shuffledArr = [];

function shuffle(inputArr) {
  const count = inputArr.length;
  if (count > 0) {
    const re = Math.floor(Math.random() * count);
    shuffledArr.push(inputArr[re]);
    // count--;
    shuffle(inputArr.filter(e => e !== inputArr[re]));
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
    const middleIndex = Math.floor(items.length / 2);
    if (items[middleIndex] === e) {
      return middleIndex;
    }
    if (items[middleIndex] < e) {
      return binary_Search(items.slice(middleIndex + 1), e) + middleIndex + 1;
    }
    if (items[middleIndex] > e) {
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
array2 = [3, 5, 6, 7, 8, 13, 18];
// Expected Output :
// [4, 5, 8, 10, 12, 13]
function arrSum(arr1, arr2) {
  const result = [];
  const longrArr = arr1.length - arr2.length > 0 ? arr1 : arr2;
  for (let i = 0; i < longrArr.length; i++) {
    if (arr1[i] !== undefined && arr2[i] !== undefined) {
      result.push(arr1[i] + arr2[i]);
    } else {
      result.push(longrArr[i]);
    }
  }
  return result;
}
console.log(arrSum(array1, array2));

// Write a JavaScript program to find duplicate values in a JavaScript array.
(function findDup(arr) {
  const result = [];
  let dups = [];
  for (const a of arr) {
    dups = arr.filter(ele => ele === a);
    arr = arr.filter(ele => ele !== a);
    if (dups.length > 1) {
      result.push(dups[0]);
    }
  }
  console.log(result.sort((a, b) => a - b));
})([1, 1, 1, 2, 3, 6, 3, 4, 5, 6, 1, 6, 6, 6, 6, 7, 88888, 5, 1, 7]);

// Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened a single level.
// Sample Data :
// console.log(flatten([1, [2], [3, [[4]]],[5,6]]));
// [1, 2, 3, 4, 5, 6]
// console.log(flatten([1, [2], [3, [[4]]],[5,6]], true));
// [1, 2, 3, [[4]], 5, 6]
(function flatten(arr, isShallow) {
  let result = [];
  if (isShallow) {
    result = deArrayShallow(arr);
  } else {
    result = deArrayDeep(arr);
  }
  console.log(result);
  function deArrayShallow(array) {
    let tmpArr = [];
    for (const ele of array) {
      if (Object.prototype.toString.call(ele).includes("Array")) {
        tmpArr = tmpArr.concat(ele);
      } else {
        tmpArr.push(ele);
      }
    }
    return tmpArr;
  }
  function deArrayDeep(array) {
    const tmpArr = deArrayShallow(array);
    for (const ele of tmpArr) {
      if (Object.prototype.toString.call(ele).includes("Array")) {
        return deArrayDeep(tmpArr);
      }
    }
    // console.log(tmpArr);
    return tmpArr;
  }
})([1, [2], [3, [[4]]], [[5, [6]]]], true);

// Write a JavaScript program to compute the union of two arrays.
// Sample Data :
// console.log(union([1, 2, 3], [100, 2, 1, 10]));
// [1, 2, 3, 10, 100]
(function union(arr1, arr2) {
  const obj = {};
  let arr = [];
  arr = arr.concat(...arr1, ...arr2);
  for (const ele of arr) {
    obj[ele] = ele;
  }
  // let result = [];
  // Object.keys(obj).forEach(ele => result.push(Number(ele)));
  // ================================================================
  // let arr3 = Object.keys(obj);
  // arr3.forEach((ele, index) => (arr3[index] = Number(ele)));
  // ==================================================================
  // console.log(Object.keys(obj).map(Number));
  const arr3 = [];
  for (const n in obj) {
    arr3.push(obj[n]);
  }
  console.log(arr3);
})([1, 2, 3], [100, 2, 1, 10]);

// 23. Write a JavaScript function to find the difference of two arrays.
// Test Data :
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
// ["6"]
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]
(function difference(arr1, arr2) {
  const result = [];
  const newArr1 = deArrDeep(arr1);
  const newArr2 = deArrDeep(arr2);
  for (const a1 of newArr1) {
    for (const [index, a2] of newArr2.entries()) {
      if (a2 === a1) {
        break;
      }
      if (a2 !== a1 && index === newArr2.length - 1) {
        result.push(a1);
      }
    }
  }
  for (const a2 of newArr2) {
    for (const [index, a1] of newArr1.entries()) {
      if (a1 === a2) {
        break;
      }
      if (a1 !== a2 && index === newArr1.length - 1) {
        result.push(a2);
      }
    }
  }

  /* let refArr = union(deArrDeep(arr1), deArrDeep(arr2));
  for (let ele of refArr) {
    for (let i of deArrDeep(arr1)) {
      if (ele === i) {
        break;
      } else if (
        deArrDeep(arr1).indexOf(i) ===
        deArrDeep(arr1).length - 1
      ) {
        result.push(ele);
      }
    }
    for (let i of deArrDeep(arr2)) {
      if (ele === i) {
        break;
      } else if (
        deArrDeep(arr2).indexOf(i) ===
        deArrDeep(arr2).length - 1
      ) {
        result.push(ele);
      }
    }
  } */
  console.log(result);
  function deArrDeep(array) {
    /* return array
      .toString()
      .split(",")
      .map(Number); */
    // =====================================
    /* let result = [];
    for (let ele of array) {
      if (ele.constructor === Array) {
        result = result.concat(...ele);
      } else {
        result.push(ele);
      }
    }
    for (let ele of result) {
      if (ele.constructor === Array) {
        return deArrDeep(result);
      }
    }
    return result; */
    // =======================================
    let result = [];
    result = result.concat(...array);
    for (const ele of result) {
      if (ele.constructor === Array) {
        return deArrDeep(result);
      }
    }
    return result;
  }
  /* function union (arr1, arr2) {
    let obj = {}
    let arr = []
    arr = arr.concat(...arr1, ...arr2)
    for (let ele of arr) {
      obj[ele] = ele
    }
    let result = []
    for (let n in obj) {
      result.push(obj[n])
    }
    return result
  } */
})([1, 2, 3, 4, 5], [1, [2], [[3], [[4]]], [5, [6]], [[[[[7]]]], [8, [9]]]]);

// 24. Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]
(function rmFalsey(arr) {
  let result = [];
  result = arr.filter(a => a);
  console.log(result);
})([NaN, 0, 15, false, -22, "", undefined, 47, null]);

// 25. Sort an array of obj based on one of the props
const library = [
  { author: "Zill Gates", title: "The Road Ahead", libraryID: 1254 },
  { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    libraryID: 3245
  }
];
(function sortArr(arr, prop) {
  arr.sort((a, b) => {
    if (a[prop] < b[prop]) {
      return -1;
    }
    // return a[prop] - b[prop]
  });
  console.log(arr);
})(library, "title");

// 26. Write a JavaScript program to find a pair of elements (indices of the two numbers) from an given array whose sum equals a specific target number.
// Input: numbers= [10,20,10,40,50,60,70], target=50
// Output: 3, 4
(function findPair(arr, t) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + arr[i + 1] === t) {
      console.log(`${i},${i + 1}`);
    }
  }
})([10, 20, 30, 10, 40, 30, 50, 60, 70], 110);

// 27. Write a JavaScript function to retrieve the value of a given property from all elements in an array.
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]
console.log(
  (arr => arr.filter(a => a))([NaN, 0, 15, false, -22, "", undefined, 47, null])
);

// 28. Write a JavaScript function to find the longest common starting substring in a set of strings.
// Sample array : console.log(longest_common_starting_substring(['go', 'google']));
// Expected result : "go"
(function findCommon(arr) {
  let result = [];
  for (const ele of arr) {
    if (arr.filter(a => a.includes(ele, 0)).length > 1) {
      result.push(ele);
    }
  }
  result = result.sort((a, b) => b.length - a.length);
  console.log(result.filter(a => a.length === result[0].length));
})(["go", "google", "goo", "george", "geo", "geor", "goog"]);
(function findCommon2(arr) {
  let targetStr = "";
  const result = [];
  const arrCopy = arr.concat().sort((a, b) => a.length - b.length);
  for (let i = 0; i < arrCopy[0].length; i++) {
    for (const [index, ele] of arrCopy.slice(1).entries()) {
      if (ele.charAt(i) === arrCopy[0].charAt(i) && index === arr.length - 2) {
        targetStr += arrCopy[0].charAt(i);
      }
    }
  }
  result.push(targetStr);
  console.log(result);
})(["SQLInjection", "SQLTutorial", "SQLhehehehehe", "SQL", "SQasdgadg;ahsdga"]);

// 29. Write a JavaScript function to fill an array with values (numeric, string with one character) on supplied bounds.
// Test Data :
// console.log(num_string_range('a', "z", 2));
// ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]
((start, finish, c) => {
  const alphabetLower = "abcdefghijklmnopqrstuvwxyz".split("");
  const alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let result = [];
  const [a, b] = [
    start < finish ? start : finish,
    start < finish ? finish : start
  ];
  switch (typeof a) {
    case "string":
      const target = /[a-z]/.test(a)
        ? alphabetLower.filter(e => e >= a && e <= b)
        : alphabetUpper.filter(e => e >= a && e <= b);
      for (let i = 0; i < target.length; i += c) {
        result.push(target[i]);
      }
      break;
    case "number":
      for (let i = a; i <= b; i += c) {
        result.push(i);
      }
      break;
  }
  result = start < finish ? result : result.sort((x, y) => -1);
  console.log(result);
})("x", "b", 2);
((st, fi, gap) => {
  const result = [];
  const step = st < fi ? gap : -gap;
  switch (typeof st) {
    case "string":
      for (
        let i = st.charCodeAt(0);
        st < fi ? i <= fi.charCodeAt(0) : i >= fi.charCodeAt(0);
        i += step
      ) {
        result.push(String.fromCharCode(i));
      }
      break;
    case "number":
      for (let i = st; st < fi ? i <= fi : i >= fi; i += step) {
        result.push(i);
      }
      break;
  }
  console.log(result);
})(99, 76, 2);

// 30. Write a JavaScript function to merge two arrays and removes all duplicates elements.
// Test data :
// var array1 = [1, 2, 3];
// var array2 = [2, 30, 1];
// console.log(merge_array(array1, array2));
// [3, 2, 30, 1]
((arr1, arr2) => {
  let result = [];
  const worker = {};
  for (const i of arr1) {
    worker[i] = i;
  }
  for (const i of arr2) {
    worker[i] = i;
  }
  result = Object.values(worker);
  console.log(result);
})([1, 2, 3], [2, 30, 1]);

// 31.Write a JavaScript function to remove a specific element from an array.
// Test data :
// console.log(remove_array_element([2, 5, 9, 6], 5));
// [2, 9, 6]
((arr, ele) => {
  console.log(arr.filter(e => e !== ele));
})([2, 5, 9, 6, 5], 5);

// 32. Write a JavaScript function to find an array contains a specific element.
// Test data :
// arr = [2, 5, 9, 6];
// console.log(contains(arr, 5));
// [True]
console.log(
  ((arr, ele) => {
    for (const e of arr) {
      if (e === ele) return true;
    }
    return "Not found";
  })([2, 8, 9, 6], 5)
);

// 33. Write a JavaScript script to empty an array keeping the original.
(arr => {
  console.log("New array is: ", arr.filter(e => false));
  console.log("Original array is: ", arr);
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// 34. Write a JavaScript function to get nth largest element from an unsorted array.
// Test Data :
// console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));
// 89
((arr, n) => {
  const temp = arr.concat();
  console.log(temp.sort((a, b) => a - b)[temp.length - 4]);
  console.log(arr);
})([43, 56, 23, 89, 88, 90, 99, 652], 4);

// 35. Write a JavaScript function to get a random item from an array.
console.log(
  (arr => arr[Math.floor(Math.random() * arr.length)])([
    43,
    56,
    23,
    89,
    88,
    90,
    99,
    652
  ])
);

// 36. Write a JavaScript function to create a specified number of elements with pre-filled numeric value array.
// Test Data :
// console.log(array_filled(6, 0));
// [0, 0, 0, 0, 0, 0]
// console.log(array_filled(4, 11));
// [11, 11, 11, 11]
((t, e) => {
  let i;
  const result = [];
  for (i = 0; i < t; i++) {
    result.push(e);
  }
  console.log(result);
})(4, 11);

// 37. Write a JavaScript function to create a specified number of elements with pre-filled string value array.
// Test Data :
console.log(array_filled(3, "default value"));
// ["default value", "default value", "default value"]
console.log(array_filled(4, "password"));
// ["password", "password", "password", "password"]

/* function array_filled(t, str) {
  let result = [];
  for (let i = 0; i < t; i++) {
    result.push(str);
  }
  return result;
} */
function array_filled(t, str) {
  return Array(t).fill(str);
}

// 38. Write a JavaScript function to move an array element from one position to another.
// Test Data :
console.log(move([10, 20, 30, 40, 50], 0, 2));
// [20, 30, 10, 40, 50]
console.log(move([10, 20, 30, 40, 50], -1, -2));
// [10, 20, 30, 50, 40]
function move(arr, ...arg) {
  let target = arr.splice(arg[0], 1);
  arr.splice(arg[1] < 0 ? arr.length + arg[1] + 1 : arg[1], null, ...target);
  return arr;
}

// 39. Write a JavaScript function to filter false, null, 0 and blank values from an array.
// Test Data :
console.log(filter_array_values([58, "", "abcd", true, null, false, 0]));
// [58, "abcd", true]
function filter_array_values(arr) {
  return arr.filter(e => e);
}

// 40. Write a JavaScript function to generate an array of specified length, filled with integer numbers, increase by one from starting position.
// Test Data :
console.log(array_range(1, 4));
// [1, 2, 3, 4]
console.log(array_range(-6, 4));
// [-6, -5, -4, -3]
function array_range(s, n) {
  let result = [],
    i,
    j;
  for (i = s, j = 0; j < n; j++, i++) {
    result.push(i);
  }
  return result;
}

// 41. Write a JavaScript function to generate an array between two integers of 1 step length.
// Test Data :
// console.log(rangeBetwee(4, 7));
// [4, 5, 6, 7]
// console.log(rangeBetwee(-4, 7));
// [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]

// 42. Write a JavaScript function to find the unique elements from two arrays.
// Test Data :
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["1", "2", "3", "10", "100"]
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]));
// ["1", "2", "3", "4", "5", "6"]
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["1", "2", "3", "10", "100"]

function deepFlatten(arr) {
  return arr.reduce((t, e) => {
    if (e.constructor === Array) {
      return deepFlatten(e);
    } else {
      return t.concat(e);
    }
  }, []);
}

function difference(arr1, arr2) {
  let obj = {};
  for (let e of arr1.flat(Infinity).concat(arr2.flat(Infinity))) {
    obj[e] = e;
  }
  return Object.values(obj);
}
