// IIFE = Immediately Invoked Function Expression (IIFE)

(function check(){ // this is named iffe
    console.log(`DB CONNECTED`);
})();  // this is called IIFE

//()()  // first () jo hai jahan ham function ka definition likhenege or jo second () jo fuction ko execute karega

// IMP: Global scope ke poluction se problem hoti hai kai baar to uss global scope ke  jo variable hai jo bhi waha declaration hai uske polution ko hatane ke liye IFEE ka use kiya

(function check1(){
    console.log(`DB TWO CONNECTED`);
})();  // agar hame 2 ya usse jayda iffi ka use karna hai to hame jitne bhi pehle iffi hai usko ; ke saath end karna padega

// arrow function with iffi

( (name) => {
    console.log(`${name}, IS CONNECTED`);
})("nikhil")   // hum iss tarah se argument bhi pass kar sakte hain