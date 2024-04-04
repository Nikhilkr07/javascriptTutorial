// call keywor in java
function setUserName(username){
    this.username = username
    console.log("called");
}

function creatUser(username, email,password){
    // setUserName(username)
    setUserName.call(this,username)  // call refernce ko hold kar leta hai

    this.email = email
    this.password = password
}

const user = new creatUser("nikhil","nik@gmail.com","******");
console.log(user);