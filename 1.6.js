const readlineSync = require("readline-sync");

// --- Ex. 1.6

let firstNumberQestion = new Number(readlineSync.question("Nombre entier N°1"))
let secondNumberQestion = new Number(readlineSync.question("Nombre entier N°2"))

var restResult = firstNumberQestion % secondNumberQestion

console.log("Reste de la dévision : " + restResult)