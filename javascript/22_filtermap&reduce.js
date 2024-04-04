// filter map and reduce


// filter


const number = [1,2,3,4,5,6,7,8,9,10]

// const newNumber = number.filter( (num) => num > 4)  // filter bhi forEach ki tarah callback function hota hai or usme ek value pass karte hai or hum apne hissab se usme codition laga ke return karwa sakte hai
// filter values ko return karta hai 

const newNumber = number.filter((num) =>{
    return num>4
})
console.log(newNumber);


// print this using forEach loop

// const newNum = []

// number.forEach( (num) =>{
//     if(num > 4){
//         newNum.push(num)
//     }
// })

// console.log(newNum);

const books = [
    {title: "Book one",genre:"History",publish:1984,edition:1999},
    {title: "Book two",genre:"Science",publish:1986,edition:2005},
    {title: "Book three",genre:"Geography",publish:1999,edition:2013},
    {title: "Book four",genre:"Non-Fiction",publish:2001,edition:2019},
    {title: "Book five",genre:"Geography",publish:1984,edition:2007},
    {title: "Book six",genre:"History",publish:1999,edition:2011},
    {title: "Book seven",genre:"Science",publish:1989,edition:2007},
    {title: "Book eight",genre:"Non-Fiction",publish:1992,edition:1999},
    {title: "Book nine",genre:"Science",publish:1981,edition:1990},
    {title: "Book ten",genre:"Non-Fiction",publish:1983,edition:2000},
]


// const userBooks = books.filter( (book) => book.genre === "History")

const userBooks = books.filter( (book) => book.publish >= 1990 && book.genre === "History")

console.log(userBooks);
