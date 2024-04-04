// getter setter in javascript

class User{
    constructor(email,password){
        this.email = email
        this.password = password
    }

    set email(value){
        this._email = value
    }

    get email(){
        return this._email.toUpperCase()
    }

    set password(value){
        this._password = value  // constructor or seter ke bich race lag jati hai main set karunga isiliye hum varible ko change karte hai using _ se
    }
    get password(){
        return `${this._password}_nikhil`
    }



}

const u = new User("nikhil@gmail.com","javascript")
console.log(u.password);
console.log(u.email);