//  how to declare array in js

const arr = [0,1,2,3,4,5]
const arrName = ["nikhil","sumit","rishabh"]

// using new keyword

const arr2 = new Array(0,1,2,3,4,5)
console.log(arr[0]);
console.log(arr[1]);

console.log(arr);
arr.push(6)
arr.push(7)
console.log(arr);
arr.pop()
console.log(arr);

arr.unshift(9)  // unshift add the value in first indext in the array
console.log(arr);
arr.shift()  // Remove element from first position (first index in array)
console.log(arr);

console.log(arr.includes(8)); // if value is present in array gives true
console.log(arr.indexOf(4)); // gives the index number where value is present

const newArr = arr.join() // its type becomes string 
console.log(arr);
console.log(newArr);
console.log(typeof newArr);

// slice  , splice

console.log("A ",arr);

arrB = arr.slice(1,3) // slice used to print in specific range the range is final-initial = no of elements
console.log("B ",arrB);

arrC = arr.splice(1,3) // splice print elements all 1 to 3 like index 1,2,3 but note: after using splice in array the element of array which is printing in splice those elements was removing from original array.
console.log("C ",arrC);

console.log(arr);