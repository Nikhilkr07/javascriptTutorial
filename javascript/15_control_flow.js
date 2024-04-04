// Control flow if else  switch case  // java ke jaisa hi hai

// === three eqals type bhi check karta hai (is called strict equal)
// !== check not qual with type

if(2 == "2"){
    console.log("Execute");   // this is printed but here 2 == "2" is not true because 2 is number and another "2" is string 
    // isliye hum hamesa equals condition === se check karte hai
}

if(2 === "2"){ // condition false
    console.log("Executte");  // ye execute nahi hoga
}