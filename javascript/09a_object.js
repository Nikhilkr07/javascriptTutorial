// const tinderUser = new Object()

const tinderUsers = {}

tinderUsers.id = "223abc"
tinderUsers.name = "tiger"
tinderUsers.isLoggedIn = false

console.log(tinderUsers);

const regularUer = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{  // Nesting of objects
            fname: "nikhil",
            lname: "kumar"
        }
    }
}

console.log(regularUer.fullname.userfullname.fname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
// merge two objects
// const obj3 = Object.assign({}, obj1,obj2)
const obj3 = {...obj1, ...obj2} // spared
console.log(obj3);

// array ofobject
const users = [
    {
        id: 1,
        email: "nikhil@gmail.com"
    },
    {
        id: 1,
        email: "nikhil@gmail.com"
    },
    {
        id: 1,
        email: "nikhil@gmail.com"
    }
]

console.log(users[1].email)

console.log(tinderUsers);
console.log(Object.keys(tinderUsers));
console.log(Object.values(tinderUsers));
console.log(Object.entries(tinderUsers));
console.log(tinderUsers.hasOwnProperty('isLoggedIn'));
