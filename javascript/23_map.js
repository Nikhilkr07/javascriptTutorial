// map method use in array

const number = [1,2,3,4,5,6,7,8,9]

// add 10 in each element of array

const newNumber = number.map( (num) => {
    return num + 10
})

console.log(newNumber);