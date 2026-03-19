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


