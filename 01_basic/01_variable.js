const accountId = 14032;
let accountEmail = "manav@gmail.com";
var accountPassword = "Manav.576";
accountCity = "Rajkot";//js allow this but not preferable
let accountState;

//we cant change the value of const variable
accountEmail = "abc@gmail.com";
accountPassword = "ABC123";
accountCIty = "Gandhinagar";

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
