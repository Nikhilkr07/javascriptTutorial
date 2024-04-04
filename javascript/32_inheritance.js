class User{
    constructor(username) {
        this.username = username
    }

    logMe(){
        console.log(`userName is: ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    addCouser(){
        console.log(`Add new Subject by user: ${this.username}`);
    }
}

const t = new Teacher("nikhil","tea@gmail.com","123")
t.addCouser()
t.logMe()
const u = new User("Sachin")
u.logMe()