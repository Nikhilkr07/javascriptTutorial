// singleton
/* constructor se jab bhi object banega wo singleton object banega */
// we can crate singleton object
// Object.create


// object literals
const mySym = Symbol("key1")

const JsUser ={
    name: "nikhil",
    "full name": "nikhil kumar kushwaha", /*is tarah ke object variable ko hum dot . operator ke saath fetch nahi kar sakte iska bas ek hi tarika hai using square breket [] */
    [mySym]: "mykey1",// agar hame ise symbol datatype ki tarah se use karna hai to hum mySym ko [mySym] ke andar likhenge
    age: 19,
    location: "ranchi",
    email: "nikhil@gmail.com",
    isLoggedIn: false,
    LoginDays: ["Monday","Saturday"] // array in object
}

// we can fetch value of object using two ways 
// first jo ki common hai .(dot) operator ke saath 
// second using the square braket [""] and write variabe in double cout ""

console.log(JsUser.email);
console.log(JsUser["email"]);
// console.log(JsUser."full name");// this is totaly wrong
console.log(JsUser["full name"]);


console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

// we can change object variable values
JsUser.email = "nikhilGeu@gmail.com"

// Agar hum nahi chahte hai ke Object ke values kabhi change na ho pay to hum us object ko freez kar denge 
// Object.freeze(JsUser)
// JsUser.location = "Ramgarh" // location change nahi hoga kyonki object freez ho gya hia
console.log(JsUser)

JsUser.greeting = function(){
    console.log("hello kaise ho");
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`hello jsUser, ${this.name}`);// String interpulation
}
console.log(JsUser.greetingTwo());
