const readlineSync = require("readline-sync");

// --- Ex. 5.2

function askTvSerie() {
    let serie = {
        actors: []
    }

    serie["name"] = readlineSync.question("Nom de la série : ")
    serie["year"] = new Number(readlineSync.question("Année de production de la série : "))

    let nActors = new Number(readlineSync.question("Combien d'acteurs à mettre dans la série ?: "))
    for (let i = 1; i <= nActors; i++) {
        serie["actors"].push(readlineSync.question("Acteurs n°"+i+" de la série : "))
    }

    return serie
}

function randomizeCast(tvSerie) {
    return tvSerie["actors"].sort(() => Math.random() - 0.5)
}

let serie = askTvSerie()
let newCast = randomizeCast(serie)

console.log("Casting pour la nouvelle série : " + newCast)

