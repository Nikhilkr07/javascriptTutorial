// this keyword

/*
const user = {
    username: "nikhil",
    price: 999,
    welcomeMessage: function(){
        // console.log(`${user.username} ,  welcome to our website`);
        console.log(`${this.username} ,  welcome to our website`);
        console.log(this);
    }
} 

// user.welcomeMessage()
user.username = "shubham"
user.welcomeMessage()
console.log(this);
*/ 


// function check(){
//     let name = "nikhil"
//     console.log(this);
// }

// const check = function(){
//     let name = "nikhil"
//     console.log(this);
// }


const check = () => {
    let name = "nikhil"
    console.log(this);
}

check()

// arrow function

// syntax

// () =>

// const addTwo = (num1,num2) => {  // jab hum arrow fuction ke saath {} braces use karene to hume return statement likhna padega 
//     return num1 + num2
// }

// const addTwo = (num1,num2) => (num1 + num2) // this is called implicit return /* jab hum arrow fuction ke saath () parantheses use karne to hame return satement use nahi karna padega */

const addTwo = (num1,num2) => ({username: "nikhil"})
console.log(addTwo(8,15));