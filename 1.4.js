const readlineSync = require("readline-sync");

// --- Ex. 1.4

let nameQuestion = readlineSync.question("Enter your name : ")
let firstNameQuestion = readlineSync.question("Enter your firstname : ")
let cityQuestion = readlineSync.question("Enter your city : ")

console.log("Your name is "+nameQuestion+" "+firstNameQuestion+" and you live in "+cityQuestion+".")