// concat two or more array in the singal array

const ramayana = ["Ram","Laskhman","Sita","Hanuman"]
const mahabharat = ["Krishna","Arjun","Bhim","Karan"]

// ramayana.push(mahabharat)
 /*When we are push array within array than the 2nd array jo hai wo first array ke andar hi ek or array ban jata hai */
/*['Ram','Laskhman',Sita',Hanuman',[ 'Krishna', 'Arjun', 'Bhim', 'Karan' ]] like this*/
// console.log(ramayana);

// console.log(ramayana[4][3]);

// if we dont want to array becomes this type so we use the concat method jo array ko concat kar deta hai elements ke saath

// const arr1 = ramayana.concat(mahabharat)
// console.log(arr1);

// we can use another method also spard method

const all_god = [...ramayana, ...mahabharat]
console.log(all_god);

const another_array = [1,2,3,4,[6,7,8],8,[5,7,[4,5]],]

// to handle this situation we use flar mehtod and gives specific range we can also provide the infinity for all elements

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("nikhil"));
console.log(Array.from("nikhil")); // from jo hai is string ka ek , ek elements ka array bana dega
// [ 'n', 'i', 'k', 'h', 'i', 'l' ]
console.log(Array.from({name: "nikhil"}));// from object ko array nahi bana payega ye empty array return kar dega

// agar hume bahut saare variables ko array me conver karna hai to hum of() mehtod ka use karte hai or uske andar saare variables ke name dete hai jisse hume array banana hai
// lets suppose

let score1 = 100
let score2 = 200
let score3= 300

const scoreArray = Array.of(score1,score2,score3)
console.log(scoreArray);