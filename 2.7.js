const readlineSync = require("readline-sync");

// --- Ex. 2.7

let n = new Number(readlineSync.question("Nombre 'n' : "))
let i = 1
let result = 0

while (i <= n) {
    result += i
    i++
}

console.log(result)