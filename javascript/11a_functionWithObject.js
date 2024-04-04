// calculateCartPrice
// ... this is spreade operator this is also called a rest operator behalf of where u use

function calculateCartPrice(val1,val2,...num){   // ...num its becomes like array
    return num;
}

console.log(calculateCartPrice(10,20,30,40));

const user = {
    name: "nikhil",
    price: 399
}

function handleOject(anyObject){
    console.log(`user name: ${anyObject.name} and price ${anyObject.price}`)
}

handleOject(user);

// we also pass argument ke jagah per hum object bana ke bhi pass kar saktein hai

handleOject({
    name: "sachin",
    price: 500
}
)

// array pass in function

const myArray = [100,200,300,400,500]

function returnSecondValue(array){
    return array[1]
}

// console.log(returnSecondValue(myArray));
console.log(returnSecondValue([900,1000,1100,1200]));