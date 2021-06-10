const readlineSync = require("readline-sync");

/**
 * Retourne la liste de tout les diviseur entier d'un nombre 'n'
 * @param {Number} n, nombre entier
 */
function getAllDivider(n) {
    let dividers = []

    for (let i = 0; i < n; i++) {
        if (n % i === 0 && i !== 1)
            dividers.push(i)
    }

    return dividers
}

let n = new Number(readlineSync.question("De quel nombre souhaitez-vous récupérer tous ces diviseurs entiers ? : "))

console.log(getAllDivider(n))