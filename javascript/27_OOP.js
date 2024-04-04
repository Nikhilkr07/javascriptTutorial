const user = {
    userName:"nikhil",
    userId:22151330,
    userSignIn:true,

    getUserDetails: function(){
        // console.log("Got user details from dadtabase");
        console.log(`userName: ${this.userName}`);
        console.log(this);
    }
}

console.log(user.userName);
// user.getUserDetails()


// constructor

// const promiseOne = new Promise()
// const date = new Date()

function Users(username,userid, userlogin){
    this.username = username
    this.userid = userid
    this.userlogin = userlogin

    this.greeting = function(){
        console.log(`${this.username}`);
    }
    return this
}

// const userOne =  Users("nikhil",11,true);
// const userTwo =  Users("shubham",12,false) // ye overall sare objects ke liye values ko change kar dega isse bachna hai to "new" keyward ka use karthe hai

const userOne = new Users("nikhil",11,true);
const userTwo = new Users("shubham",12,false) 

console.log(userOne);
console.log(userTwo);

console.log("Constructor");
console.log(userOne.constructor);

// New
/**When we use new every time create new empty object then after we use it
 * Than Cusntructor function call hota hai or arguments ko pack karke de deta hai
 * new ke andar inject karte hai or
 * phir values mil jata hai 
 */