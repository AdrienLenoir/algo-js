const readlineSync = require("readline-sync");

// --- Ex. 1.7

let shoeSizeQuestion = new Number(readlineSync.question("Entrer votre pointure : "))
let birthQuestion = new Number(readlineSync.question("Année de naissance : "))

let result = shoeSizeQuestion * 2
result += 5
result *= 50
result -= birthQuestion
result += 1766

console.log("Result : " + result)