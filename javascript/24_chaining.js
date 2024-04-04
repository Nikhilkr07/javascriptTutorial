// use one method with other's method is called chaining


const number = [1,2,3,4,5,6,7,8,9]

const newNumber = number
                        .map( (num) => num * 10)
                        .map( (num) => num + 1)
                        .filter( (num) => num >= 40)
console.log(newNumber);                        
 
                                                                 
// chaining me hum ek se jayda method ko use karte hai pehle first method execute hoga then first wala values second me aa jayega then second wala third me after jo bhi third me condition perform hoga uske hissab se values return ho jalyegi iss case me pehle humne sabhi number ko 10 se multiply kiya jo ki execute hone ke baad second method me jump kar jayegi updated value ke saath phir humne one add kiya phir third method me filter ka use karke codition laga ke numbers ko return karwa diya