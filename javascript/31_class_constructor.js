// class constructor and static

// class User{
//     constructor(username,email,password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptedPass() {
//         return `${this.password}abc`
//     }

//     nameUpperCase(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const u = new User("nikhil","nikhil@gmail.com","*****")
// console.log(u.encryptedPass());

// console.log(u.nameUpperCase());

// without using class

function User(username,email,password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptedPass = function(){
    return `${this.password}abc`
}

User.prototype.nameUpperCase = function(){
    return `${this.username.toUpperCase()}`
}

const u1 = new User("nikhil","email.com","1234");
console.log(u1.encryptedPass());
console.log(u1.nameUpperCase());