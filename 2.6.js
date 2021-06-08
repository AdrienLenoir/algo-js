const readlineSync = require("readline-sync");

// --- Ex. 2.6

let numberForDayQuestion = new Number(readlineSync.question("Nombre entre 1 et 7 : "))
let numberToDay = {
    1: "Lundi",
    2: "Mardi",
    3: "Mercredi",
    4: "Jeudi",
    5: "Vendredi",
    6: "Samedi",
    7: "Dimanche",
}

console.log(numberToDay[numberForDayQuestion])