const readlineSync = require("readline-sync");

// --- Ex. 2.2

let minQuestion = new Number(readlineSync.question("Min : "))
let maxQuestion = new Number(readlineSync.question("Max : "))
let currentQuestion = new Number(readlineSync.question("Current : "))

if (currentQuestion > minQuestion && currentQuestion < maxQuestion) {
    console.log(currentQuestion + " est compris entre " + minQuestion + " et " + maxQuestion)
} else {
    console.log(currentQuestion + " n'est pas compris entre " + minQuestion + " et " + maxQuestion)
}
