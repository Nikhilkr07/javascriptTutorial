// Higher order function forEach()

const coding = ["java","cpp","jsvascript","c","ruby","python"]

// coding.forEach(function (val){  // forEach fumction me function ka name likhna nahi hota hai bas hum usme ek argument pass karte hai like jaise likha hai upper
//     console.log(val);

// })

// forEach wit arraow function  
// console.log("print using arrow function");

// coding.forEach( (val)=> {
//     console.log(val);
// })

// for each with our own function

// function printMe(val){
//     console.log(val);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index,arr)=>{
//     console.log(item,index,arr);
// } )

const myCoding =[ 
    {
        languageName: "java",
        languageFileName: "java"
    },

    {
        languageName: "c++",
        languageFileName: "cppp"
    },

    {
        languageName: "javascript",
        languageFileName: "js"
    }
]

myCoding.forEach( (item)=> {
    console.log(item.languageName);
})