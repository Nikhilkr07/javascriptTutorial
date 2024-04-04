// Higher Order loop

// for of loop

// const arr = [1,2,3,4,5]

// for(const num of arr){   // ye java ke for fach loop ke jaisa hi hai bas of ke jagah java me (:) colon aara hai
//     console.log(num);
// }

// // print each character
// const greeting = "Hello world"
// for(const greet of greeting){
//     console.log(`Each char is: ${greet}`);
// }

const map = new Map();

map.set("IN","India")
map.set("RU","Russia")
map.set("Fr","France")

for(const key of map){
    console.log(key);
}

// output
// [ 'IN', 'India' ]
// [ 'RU', 'Russia' ]
// [ 'Fr', 'France' ]

for(const [key, value] of map){    // called destructure of array key of IN,RU,FR and corrsopnding value in India Russia and france
    console.log(`${key} :- ${value}`);
}


// *** NOTE: for of loop doesn't works on OBject