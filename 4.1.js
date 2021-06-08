const readlineSync = require("readline-sync");

// --- Ex. 4.1

// calcule la surface avec la longueur et la largeur
function calcSurface(longueur, largeur) {
    return longueur * largeur
}

let longueur = new Number(readlineSync.question("Longueur : "))
let largeur = new Number(readlineSync.question("Largeur : "))

console.log("Surface : " + calcSurface(longueur, largeur))


