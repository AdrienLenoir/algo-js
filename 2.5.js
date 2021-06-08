const readlineSync = require("readline-sync");

// --- Ex. 2.5

let favoNumber = 0

while(favoNumber != 42) {
    favoNumber = new Number(readlineSync.question("Votre numéro favoris : "))

    if (favoNumber != 42)
        console.log("Etes-vous sûr ?")
}
