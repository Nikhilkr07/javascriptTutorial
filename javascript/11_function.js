/*function myFuction() {
    console.log("n"),
    console.log("i");
    console.log("k");
    console.log("h");
    console.log("i");
    console.log("l");
}

// myFuction // this is referece
myFuction()  // it is execution of fuction  */

// Write a program in js to create one fuction which is print the sum of two numbers

function addTwoNumbers(number1,number2){
    console.log(number1 + number2);
}

// addTwoNumbers(2,5);
const result = addTwoNumbers(6,9);
console.log("result ",result);  // yahan result undefined aayega kyonki resutl me kuch store hi nahi ho raha hai kyonki fucntion value ko add karke print karwa raha hai na ki add value ko return kar raha hai 

// here

function addTwoNumbers1(number1, number2){
    return number1+number2;
}

const result1 = addTwoNumbers1(10,20)
console.log("result1 ",result1);


function userLoggedInMessage(username){
    if(username === undefined || username === ""){
        return `Pleasae enter the user name`
    }
    return `${username} just logged in`
}

console.log(userLoggedInMessage("nikhil"));