class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username: ${this.username}`);
    }

    static createId(){ // javascript me static function ko inherit karne se rokta hai
        return 123
    }
}

// const u = new User("nikhil")
// console.log(u.createId());

class Teacher extends User{
    constructor(username,email,pass){
        super(username)
        this.email = email
        this.pass = pass
    }
}

const t = new Teacher("sumit","sumit@gmail.com",125)
t.logMe()
console.log(t.createId()); // kyonki createId static hai to ye inherit nahi hoga

