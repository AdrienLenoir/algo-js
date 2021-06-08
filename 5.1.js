const readlineSync = require("readline-sync");

// --- Ex. 5.1

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

let series = []
let nSeries = new Number(readlineSync.question("Combien de série voulez-vous générer ? : "))

for (let i = 0; i < nSeries; i++) {
    series.push(askTvSerie())
}

console.log(series)

