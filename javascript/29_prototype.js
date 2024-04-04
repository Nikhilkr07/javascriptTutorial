let myName = "nikhil     "

console.log(myName.length);
// we need to not count the space without using trim
// console.log(myName.trueLenght());

let supremeHeros = ["lord Shiva","lord Vihsnu"]

let herosPower ={
    shiva: "Distroyer",
    vishnu: "Operrator",

    getShivaPower: function(){
        console.log(`Power of shiva : ${this.shiva}`);
    }
}
// inject on object
Object.prototype.hanumanJi = function(){
    console.log("Hanuman Ji Present on all Hero's Object");
}

// inject on Array

Array.prototype.heyHanumanJi = function(){
    console.log("Hanuman ji");
}

// herosPower.hanumanJi()
// supremeHeros.hanumanJi()

// supremeHeros.heyHanumanJi()
// herosPower.heyHanumanJi() parent ka power child le sakta hai per child ka power parent nahi le sakta

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)
// String wale problem ka solution
let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"nikhil".trueLength()
"iceTea".trueLength()