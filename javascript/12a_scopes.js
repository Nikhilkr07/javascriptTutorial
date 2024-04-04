// here we can learn what is scope of the variable in nested function and nested if else condition and any nested situation.

// with function

function one(){
   const username = "nikhil"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
     /*hum yahan per website ko access nahi kar sakte hai kyonki jo website ka scope hai wo fuction two ke andar or uske child function ke andar hi access kar sakte hai per uske scope ke bahar nahi isilye ye hame error dega like in java child parent relation we have NOTE: "lekin jo fuction two hai wo user name ko access kar sakta hai kyonki uske liye wo global variable jaisa hai ya in other word uske parent ka variable hai jo child access kar sakta hai "issi tarah saare nested condition follow karte hain" */
     two()
}

// one()

// if else nested

if(true){
    const username = "nikhil"
    if(username === "nikhil"){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // this gives error
}

console.log(addOne(5));  // hum fuction addOne ko declaration se pehle call kar sakte hai kyonki iss fuction ko koi variable hold nahi kar raha hai agar iss fucntion ko koi variable hold karta to hame variable ke declatation se pehle iss fuction ko call nahi kar sakte

function addOne(num){
    return num + 1;
}

// console.log(addTWo(10)); // ye error dega kyonki addTwo ek variable ki tarah hai or variable ko declare karne se pehle hum usse use nahi kar sakte

const addTWo = function (num){
    return num + 2;
}

// console.log(addTWo(10));

