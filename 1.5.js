const readlineSync = require("readline-sync");

// --- Ex. 1.5

let firstDecimalQuestion = new Number(readlineSync.question("Nombre décimale N°1 : "))
let secondDecimalQuestion = new Number(readlineSync.question("Nombre décimale N°2 : "))
let result = Math.trunc(firstDecimalQuestion) * Math.trunc(secondDecimalQuestion)

console.log("Résultat : "+result)