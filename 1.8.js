const readlineSync = require("readline-sync");

// --- Ex. 1.8

let getPatateQuestion = readlineSync.question("Avec quoi fait-ont des frites ? Des .. ")
let getPureeQuestion = readlineSync.question("Avec celles-ci, si on les écrasses on peut faire de la .. ")

console.log("C'est l'histoire de 2 " + getPatateQuestion + "qui traversent la route.\nL'une d'elle se fait écraser.\nL'autre dit: «Oh "+getPureeQuestion+"!»")