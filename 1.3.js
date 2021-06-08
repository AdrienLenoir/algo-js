const readlineSync = require("readline-sync");

// --- Ex. 1.3

let firstname_question = readlineSync.question("Enter your firstname : ")

console.log("Hello " + firstname_question)