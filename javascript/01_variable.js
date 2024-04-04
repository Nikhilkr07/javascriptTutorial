const accountId = 22151330 // we never chage the value of type const
let accountEmail = "nikhil@gmail.com"
var accountPassword = "12345"
accountCity = "Ranchi"  // we can define withour datatype variable
let accountState;

// accountId = 2  // not allowed because the accountId is const variable

accountEmail = "nik@gmail.com"
accountPassword = "5698"
accountCity = "Bangaluru"

console.log(accountId);

/* we can print multiple value in single console statement 
   for that we can use console.table*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

/* prefer not use var because of issue in block scope and functional scope */