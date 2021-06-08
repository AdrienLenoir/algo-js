const readlineSync = require("readline-sync");

// --- Ex. 4.6

function factorial(n, result = n) {
    if (n === 0) return 1
    return n === 1 ? result : factorial(n-1, result*(n-1))
}

let n = new Number(readlineSync.question("Factorielle de : "))

console.log("factorial de "+n+" = " + factorial(n))


