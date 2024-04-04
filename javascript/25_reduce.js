// reduce method

const numbers = [1,2,3]
// acc = accumulator
// currval = current value
// const total = numbers.reduce( function (acc,currval) {
//    console.log(`acc: ${acc}, currval: ${currval}`);
//     return acc + currval
// },0) // yahan accumulator ki value ko denge jo hum dena chahte hai

total = numbers.reduce( (acc,currval) => acc + currval , 0 )

console.log(total);

// use reduce with array of object

const shoppingCart = [
    {itemName: "shirt",
     price: 999
    },
    {itemName: "book",
     price: 500
    },
    {itemName: "laptop",
     price: 45999
    },
    {itemName: "mobile",
     price: 11999
    }
]


const billToPay = shoppingCart.reduce( (acc,item) => (acc + item.price), 0)
console.log(billToPay);