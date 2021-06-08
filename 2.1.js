const readlineSync = require("readline-sync");

// --- Ex. 2.1

let ageQuestion = new Number(readlineSync.question("Entrer votre âge : "))

if (ageQuestion >= 18) {
    console.log("Vous êtes majeur!")
} else {
    console.log("Vous n'êtes pas encore majeur!")
}