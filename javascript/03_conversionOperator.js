// in this program we learn to how to convert an value to one type to another type in javascript

let score = "34abc"
// let score = null
// let score = undefined
// let score = true

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);



let score1 = "34"
let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1);
console.log(valueInNumber1);

// "33" -> 33
// "33abc" -> NaN = (not a number)
// true -> 1, false -> 0

/* we can covert 1 or zero as a boolean */

console.log("boolean example of type conversion");

let loggedIn = 1
let booleanIsLoggedIn = Boolean(loggedIn)
console.log(booleanIsLoggedIn);

// 1 -> true
// 0 -> false
// "" -> false
// "nikhil" -> true

console.log("convert number to string");

let someNumber = 33

let stringNumber = String(someNumber)

console.log(stringNumber);
console.log(typeof stringNumber);

