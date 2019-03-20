// Convert to arrow function

function sayHello(name){
    console.log(`Hi, ${name}!`)
}

sayHello = (name) => {console.log(`Hi, ${name}!`)}



function getOlder(age){
    return age+50
}

getOlder = (age) => {return age+50}
 

// Debug

const multiply = (num1, num2) => {console.log(num1 * num2)}; 
const subtractFive = num => (diff = 5 - num); 
console.log(diff); //define diff

const printName = name => { console.log(name) }
