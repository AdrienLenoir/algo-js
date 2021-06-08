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

// retourne la moyenne d'une liste de nombre
function average(arr) {
    let total = 0
    let avg = 0

    for (let n of arr)
        total += n

    avg = total / arr.length

    return avg
}

// retourne la plus petite valeur d'une liste de nombre
function min(arr) {
    return Math.min(...arr)
}

// retourne la plus grande valeur d'une liste de nombre
function max(arr) {
    return Math.max(...arr)
}

let nRand = new Number(readlineSync.question("Combien de nombre aléatoire ? : "))
let randArr = multiRand(nRand)
let minRand = min(randArr)
let maxRand = max(randArr)
let avgRand = average(randArr)

console.log("Liste de "+nRand+" nombre aléatoire compris entre 1 et 10 : " + multiRand(nRand) + "\nMin : " + minRand + "\nMax : " + maxRand + "\nAverage : " + avgRand)


