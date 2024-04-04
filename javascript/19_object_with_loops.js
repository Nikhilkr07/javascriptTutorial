// for in loop hum object ke saath use karte hai

const myObj = {
    java: "java",
    cpp: "c++",
    py: "python",
    js: "javascript",
    rb: "rubby"
}

// for in loop

// for(const key in myObj){
//     console.log(key);
// }

// this loop only print key value like java,cpp,py,js,rb

for(const key in myObj){
    console.log(`${key} :- ${myObj[key]}`);
}

// for in loop with array

const programming = ["java","py","rb","cpp","js"]

for(const key in programming){   // this loop print only index value of array
    console.log(key);
}

for(const key in programming){  
    console.log(programming[key]); // this print value of array
}