const readlineSync = require("readline-sync");

const random = Math.trunc(Math.random() * 100)
let find = false

/**
 * Retourne le statut de la vérification avec la variable random
 * return :
 *  - 0, si n est plus petit
 *  - 1, si n est plus grand
 *  - 2, si n est égale
 * @param {Number} proposal
 */
function checkProposal(proposal) {
    if (proposal > random) return 0
    if (proposal < random) return 1
    return 2
}

console.log("Devinez le numéro qui a été générer (compris entre 0 et 100)")

while (!find) {
    let proposal = new Number(readlineSync.question("Indiquez un nombre entre 0 et 100 : "))

    switch (checkProposal(proposal)) {
        case 0:
            console.log("Plus petit")
            break;
        case 1:
            console.log("Plus grand")
            break;
        case 2:
            find = true
            console.log("C'est gagner ! GG :)")
            break;
    }
}