// Numbers
const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length)
console.log(balance.toFixed(2));

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4));

const hundereds = 1000000
console.log(hundereds.toLocaleString('en-IN'));

//++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++

console.log(Math);

console.log(Math.abs(-4));
// abs gives absolute value means -4 gives 4
console.log(Math.round(4.6));
// round gives the exact roundup value means 4.4 gives 4 and 4.6 gives 5
console.log(Math.ceil(4.2));
// ceil means kamra ka ceiling if value is grater tha 4 means 4.1, 4.2 it always gives 5
console.log(Math.floor(4.9));
// floor means lower value means 4.9 ka 4
console.log(Math.min(1,5,6,7,0));
console.log(Math.max(5,0,8,9,12,11));
console.log(Math.random());
// random ki value hamesha 0 se 1 ke bich me aayegi
console.log((Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)