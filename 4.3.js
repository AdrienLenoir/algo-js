const readlineSync = require("readline-sync");

// --- Ex. 4.3

// retourne un nombre aléatoire compris entre 1 et 10
function rand10() {
    return Math.trunc(Math.random() * 10) + 1
}

// retourne une liste de n random
function multiRand(n) {
    let arr = []

    for (let i = 0; i < n; i++)
        arr.push(rand10())

    return arr
}

let nRand = new Number(readlineSync.question("Combien de nombre aléatoire ? : "))

console.log("Liste de "+nRand+" nombre aléatoire compris entre 1 et 10 : " + multiRand(nRand))


