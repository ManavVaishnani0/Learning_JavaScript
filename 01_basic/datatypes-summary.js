// Primitive
// 7 types : String , Number , Boolean , null , undefined , Symbol , Bigint

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
console.log(id);

const bigNumber = 25433563546n;

// Reference (Non Primitive)
//Array, Object, Function

const heros = ["Manav","Dharam","Jeel","Srushti"];
let myobj = {
    name : "Manav",
    age : 20,
}

const myFunction = function(){
    console.log("Hello World");   
}

console.log(typeof bigNumber); // output bigint
console.log(typeof outsideTemp); // output object

console.log(typeof myFunction); // output function

