const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    // Database calls, cryptoGraphy
    setTimeout(function(){
        console.log('Async task is compelte');
        resolve();
    },1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
})

new Promise(function(resolve, reject){

    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log('Async 2 resolved');
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"nikhil",email:"nikhil@g.com"});
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        // let error = true;
        let error = false;
        if(!error){
            resolve({username:"nikhil",password:"*****"});
        }
        else{
            reject(error)
        }
    },1000)
})


promiseFour.then((user) =>{
    console.log(user);
    return user.username;
}).then((username) =>{
    console.log(username);
}).catch(function (error){
    console.log("Somthing was happend wrong");
}).finally(() => console.log("The Promise is either completed or Rejected"))




const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        // let error = false;
        let error = true;
        if(!error){
            resolve({username:"javaScript",password:"*****"});
        }
        else{
            reject('ERROR: Js went wrong')
        }
    },1000)
});

async function consumepromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    }catch(error){
        console.log(error);
    }
}

consumepromiseFive()

// async function fetchAllUsesrs(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
//         const data = await response.json()
//         console.log(data);
//     }catch(error){
//         console.log('E:  ',error);
//     }
// }

// fetchAllUsesrs()

// fetch user using .then
fetch('https://api.github.com/users/hiteshchoudhary')
.then(function(response){
    return response.json()
})
.then((data) =>{
    console.log(data);
})
.catch(function (error){
    console.log(error);
})
