// primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3 
// both (score) and (scoreValue) is treated as Number datatype

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
/* her (id) and anotherId values are same but in actual these are different in case of Symbol so that's is the reason this gives false */

const bigNumber = 345635649646n
/* we put in large number end n then its treated as bigNumber datatype */

// non primitive datatype or reference

// Array, Object, Functions

// Array
const names = ["nikhil","sumit","rishabh"];

// Object
let myObj = {
    name: "nikhil",
    age: 19,
}

// functions

const Myfuction = function(){
    console.log("hello duniya")
}

// find type of all the variables
console.log(typeof score);
console.log(typeof scoreValue);
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp);
console.log(typeof anotherId);
console.log(typeof bigNumber);

console.log(typeof names);
console.log(typeof Myfuction);


// ******* How datatypes stored in memory*********

// primitive (Stack)  , Nonprimitive (Heap)
console.log("next part");

let myName = "nikhil"
let anotherName = myName

anotherName = "sachin"

console.log(anotherName);
console.log(myName);

/** myName = "nikhil" hai jo anotherName ko assign kar diya or phir anotherName = "sachin" kar diya kyonki anotherName or myName primitive datatype hai jo satck me stored hota hai isiliye myName ka copy anotherName me aa jayega or anotherName me value change karenge to myName me koi effect nahi padega myName still "nikhil" hi rahega 
 * Note : stack me copy pass hota hai
 */

let userOne = {
    EmailId: "user@gmail.com",
    upiId: "user@ybl"

}

let userTwo = userOne

userTwo.EmailId = "nikhil@gmail.com"

console.log(userOne.EmailId);
console.log(userTwo.EmailId);

/* Object ki jo memory hai wo Heap me store hoti hai or iska value dusre me assign karne ka iska reference uss value ko mil jata hai isiliye hum agar kisi bhi value ko change karenge to wo dono me change ho jayega

iss example me hamne userOne ko userTwo me assign kar diya user two ko user one ka refernce mil gaya isiliye user two ke email ko change karne per user two ka email bhi change ho gya
*/