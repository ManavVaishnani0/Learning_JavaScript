//Basic comparison
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

//comparison in dataTypes
console.log("2" > 1);
console.log("02" < 1);
console.log("02" > 1);

//when == operator are there null work as null but in case of comparison null works as 0
console.log(null > 0); //false
console.log(null >= 0); //true
console.log(null == 0); //false

//undefined give false in whole three cases
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined >= 0);

// ===
console.log("2" === 2); // false
