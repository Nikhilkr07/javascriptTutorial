const name = "nikhil"
const count = 50

console.log("hello my name is " + name + " and my count is "+count);
// iske jagah ham string manipulation ka use kar saktein hai
// using this (``) this sign ki called back type

console.log(`hello my name is ${name} and my count is ${count}`);

// both produced same results

// another way to define a String

const city = new String('Ranchi')
console.log(city);
console.log(city[1]);
console.log(city[4]);
console.log(city.__proto__);

console.log(city.length);

console.log(city.toUpperCase());

console.log(city.charAt(4));
console.log(city.indexOf('c'));

const newString = "nikilkumar"
const anotherString = newString.slice(-8, 4);
console.log(anotherString);

const newStringOne = "    nikhil   "
console.log(newStringOne);
console.log(newStringOne.trim()); // trim white spaces ko remove kar deta hai

const url = "hhtps://nikhil.com/nikhil%20kumar"

console.log(url.replace('%20','-'));

console.log(url.includes('nikhil'));

console.log(url.includes('sundar'));
const Stringtwo = "nikhil-kumar-hello-kaise-ho"

console.log(Stringtwo.split('-'))