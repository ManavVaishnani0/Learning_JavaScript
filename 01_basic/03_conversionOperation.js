let score = undefined

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);

console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33a" => NaN
// "true" => 1 || "false" => 0

let isLoggedIn = "manav"
let booleanIsLoogedIn =Boolean(isLoggedIn)
console.log(booleanIsLoogedIn);

// 1 => true || 0 => false
// "" => false
//"manav" => true

let someNumber =33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);


/***********Operations*************/

let value = 3
let negValue = -value
console.log(negValue);

// console.log(2+2);
// console.log(3*3);
// console.log(2/2);
// console.log(2**3);
// console.log(5%2);

let str1 = "Manav"
let str2 =" Vaishnani"
let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(true);
console.log(+true);
console.log(+"");

