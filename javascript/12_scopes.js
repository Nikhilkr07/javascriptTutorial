// scopes of variable in js
var c = 300
let a = 300

if(true){
    let a = 10
    console.log("Inner a", a);
    const b = 20
     c = 30  // this behave likes a global variable
}
console.log("outer a ",a);
// console.log(b);
console.log(c);